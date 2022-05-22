import sys

sys.path.append("./")

import dataclasses
import datetime
import json
import os
import pandas as pd
import firebase_admin
from firebase_admin import credentials, db
import prefect
from prefect import Flow, Parameter, task
from prefect.tasks.secrets import PrefectSecret
from pipeline.matching import (
    Match,
    User,
    best_effort_minimize_repeat_matches,
    get_matches,
    validate_matches,
)
from pipeline.utils.matches import (
    generate_keys,
    from_release_tag,
    to_release_tag,
)


MS = 1000


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

    # After initialization, delete raw credentials file
    if os.path.exists(credentials_outfile):
        os.remove(credentials_outfile)
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


@task
def delete_previous_release(
    db, community: str, release_tag: str, force: bool = False
):
    logger = prefect.context.get("logger")
    release = from_release_tag(release_tag)
    if force:
        logger.info("Proceeding with forced deletion.")
    elif release < datetime.datetime.now():
        logger.warning(
            (
                "You are trying to delete a past round of matches.\n"
                "Are you sure?\n"
                "This will also delete any chats from those matches.\n"
                "Use the `force` parameter to run this deletion."
            )
        )
        return

    # Get user-match records for the given community and release
    matches_ref = db.reference(f"matches/{community}")
    release_tag = to_release_tag(release)
    query = matches_ref.order_by_child("release_tag").equal_to(release_tag)
    match_records = query.get()
    logger.info(f"Found {len(match_records)} user-match records to remove.")

    # Add chat messages from those matches to the removal set
    deleted_chats = {}
    for match in match_records.values():
        deleted_chats[match["id"]] = None

    # Only remove if records are found, otherwise, we might accidentally
    # delete all match user-records!
    if match_records:
        deleted_matches = {key: None for key in match_records}
        matches_ref.update(deleted_matches)
        logger.info(f"Removed {len(deleted_matches)} user-match records.")
    else:
        logger.info("No user-match records to remove.")

    if deleted_chats:
        chats_ref = db.reference(f"messages/{community}")
        chats_ref.update(deleted_chats)
        logger.info(f"Removed messages for {len(deleted_chats)} chats.")
    else:
        logger.info("No chat message records to remove.")


@task
def upload_matches(
    db,
    df_matches: pd.DataFrame,
    community: str,
    release_tag: str,
    force: bool = False,
):
    logger = prefect.context.get("logger")
    # Read matches into dataclass values
    logger.info("Read {} rows, {} cols.".format(*df_matches.shape))
    df_matches["release"] = df_matches["release"].apply(from_release_tag)
    match_dicts = df_matches.to_dict(orient="records")
    matches = [Match(**m) for m in match_dicts]

    # Build match records for each user
    res = {}
    for m in matches:
        release_tag = to_release_tag(m.release)
        release_ts = m.release.timestamp() * MS
        participants = {other_uid: True for other_uid in m.users}
        match_id = f"{release_tag}~{m.key}"
        for my_uid in m.users:
            combo_id = f"{match_id}~{my_uid}"
            path = f"{m.community}/{combo_id}"
            record = {
                "for": my_uid,
                "participants": participants,
                "release_tag": release_tag,
                "release_timestamp": release_ts,
                "title": m.title,
                "id": match_id,
            }
            res[path] = record
    logger.info(f"Generated {len(res)} user-match records.")

    # Write matches to Firebase, if intended
    if not force:
        logger.warning(
            (
                "Dry run: Skipped writing records to Firebase.\n"
                "Use the `force` parameter to apply this action."
            )
        )
        return
    matches_ref = db.reference("matches")
    matches_ref.update(res)


def matching_pipeline() -> Flow:
    with Flow(name="matching_pipeline") as flow:
        param_community = Parameter(name="community", required=True)
        param_matching_retries = Parameter(name="matching_retries", default=5)
        param_release = Parameter(name="release", required=True)
        param_force = Parameter(name="force", required=False)

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

        # Do not attempt deletion until new matches are ready
        deleted = delete_previous_release(
            db, param_community, param_release, param_force
        )
        deleted.set_upstream(df_matches)

        # Do not attempt upload until previous release deletion resolved
        uploaded = upload_matches(
            db, df_matches, param_community, param_release, param_force
        )
        uploaded.set_upstream(deleted)

    return flow


if __name__ == "__main__":
    flow = matching_pipeline()
    flow.run(
        parameters={
            "community": "demo",
            "release": "2022-04-10",
        }
    )
