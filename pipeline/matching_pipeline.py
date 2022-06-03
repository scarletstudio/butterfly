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
from pipeline.extract.users import extract_users
from pipeline.extract.matches import extract_recent_matches
from pipeline.load.release import delete_previous_release, upload_matches
from pipeline.matching import (
    best_effort_minimize_repeat_matches,
    get_matches,
    validate_matches,
)
from pipeline.schema.user import User
from pipeline.schema.match import Match
from pipeline.utils.firebase import initialize_firebase_for_prefect
from pipeline.utils.release import (
    generate_keys,
    from_release_tag,
    to_release_tag,
)


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
            "release": "2022-04-17",
        }
    )
