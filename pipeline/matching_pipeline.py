import sys

sys.path.append("./")

import dataclasses
import json
import pandas as pd
import firebase_admin
from firebase_admin import credentials, db
import prefect
from prefect import task, Flow, Parameter
from prefect.tasks.secrets import PrefectSecret
from pipeline.matching import (
    Match,
    User,
    best_effort_minimize_repeat_matches,
    get_matches,
    validate_matches,
)
from pipeline.utils.matches import generate_keys, from_release_tag


@task
def initialize_firebase_for_prefect(database_url: str, admin_credentials: str):
    # Parse and write credentials to file
    credentials_outfile = "prefect-credentials.json"
    raw = str(admin_credentials).replace("'", '"').replace("^", " ")
    parsed = json.loads(raw)
    content = json.dumps(parsed, indent=4)
    with open(credentials_outfile, "w+") as file:
        file.write(content)

    # Initialize Firebase Admin service account
    cred = credentials.Certificate(credentials_outfile)
    firebase_admin.initialize_app(cred, {"databaseURL": database_url})
    return db


@task
def extract_users(db, community: str) -> pd.DataFrame:
    logger = prefect.context.get("logger")
    all_users = db.reference("users").get()
    df_users = pd.DataFrame(all_users.values())
    # Filter out users who have not logged in
    df_users = df_users[df_users.latestLogin.notna()]
    logger.info("Returned {} rows, {} cols.".format(*df_users.shape))
    return df_users


@task
def extract_recent_matches(db, community: str) -> pd.DataFrame:
    logger = prefect.context.get("logger")
    matches_ref = db.reference(f"matches/{community}")
    user_match_records = matches_ref.get()
    logger.info(f"Extract {len(user_match_records)} user-match records.")

    # Convert user-match records to match records
    seen_match_ids = set()
    recent_match_records = []
    for record in user_match_records.values():
        match_key = record["id"]
        if match_key in seen_match_ids:
            continue
        seen_match_ids.add(match_key)
        match = Match(
            users={uid for uid in record["participants"]},
            community=community,
            release=from_release_tag(record["release_tag"]),
            key=match_key,
            title=record["title"],
        )
        recent_match_records.append(match)
    logger.info(f"Converted to {len(recent_match_records)} match records.")

    df_recent_matches = pd.DataFrame(recent_match_records)
    logger.info("Returned {} rows, {} cols.".format(*df_recent_matches.shape))
    return df_recent_matches


@task
def compute_matches(
    df_users: pd.DataFrame,
    df_recent_matches: pd.DataFrame,
    community: str,
    release: str,
    matching_retries: int,
) -> pd.DataFrame:
    logger = prefect.context.get("logger")

    # Convert user DataFrame to dataclass records
    logger.info(f"Read {len(df_users)} users.")
    field_names = [f.name for f in dataclasses.fields(User)]
    user_dicts = df_users[field_names].to_dict(orient="records")
    users = [User(**u) for u in user_dicts]

    # Filter to only matches from before the current release
    logger.info(f"Read {len(df_recent_matches)} recent matches.")
    df_recent_matches = df_recent_matches[
        df_recent_matches["release"] < release
    ]
    logger.info(f"Filtered to {len(df_recent_matches)} recent matches.")

    # Convert recent matches DataFrame to dataclass records
    field_names = [f.name for f in dataclasses.fields(Match)]
    recent_match_dicts = df_recent_matches[field_names].to_dict(
        orient="records"
    )
    recent_matches = [Match(**u) for u in recent_match_dicts]

    # Wrap function with retry handler
    with_retries = best_effort_minimize_repeat_matches(
        n_retries=matching_retries, log=logger.info
    )
    get_matches_with_retries = with_retries(get_matches)

    # Generate and validate matches
    logger.info("Generating next round of matches...")
    matches = get_matches_with_retries(users, recent_matches)
    names = {u.uid: u.displayName for u in users}
    for m in matches:
        match_names = ", ".join([names[uid] for uid in m.users])
        logger.info(f"\t{match_names}")
    total, t2, t3 = validate_matches(matches, users, recent_matches)
    logger.info(f"\tTotal = {total}, T2: {t2}, T3: {t3}")

    # Write out matches
    df_matches = pd.DataFrame(matches)
    df_matches["community"] = community
    df_matches["release"] = release
    df_matches["key"] = generate_keys(n=len(df_matches))
    df_matches["title"] = "Your Match"

    logger.info("Returned {} rows, {} cols.".format(*df_matches.shape))
    logger.info("Done.")
    return df_matches


def matching_pipeline():
    with Flow(name="matching_pipeline") as flow:
        param_community = Parameter(name="community", required=True)
        param_release = Parameter(name="release", required=True)
        param_matching_retries = Parameter(name="matching_retries", default=5)

        secret_database_url = PrefectSecret("database_url")
        secret_admin_credentials = PrefectSecret("admin_credentials")
        db = initialize_firebase_for_prefect(
            secret_database_url, secret_admin_credentials
        )

        df_users = extract_users(db, param_community)
        df_recent_matches = extract_recent_matches(db, param_community)
        df_matches = compute_matches(
            df_users,
            df_recent_matches,
            param_community,
            param_release,
            param_matching_retries,
        )

    return flow


if __name__ == "__main__":
    flow = matching_pipeline()
    flow.run(
        parameters={
            "community": "demo",
            "release": "2022-04-10",
        }
    )
