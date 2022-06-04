import dataclasses

import pandas as pd
import prefect
from prefect import task

from pipeline.matching.core.utils import generate_keys
from pipeline.matching.evaluation.optimizers import (
    best_effort_minimize_repeat_matches,
)
from pipeline.matching.evaluation.validation import validate_matches
from pipeline.matching.finalizers.fallback import get_fallback_matches
from pipeline.types import Community, Match, ReleaseTag, User


@task
def compute_fallback_matches(
    df_users: pd.DataFrame,
    df_recent_matches: pd.DataFrame,
    community: Community,
    release: ReleaseTag,
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
    get_matches_with_retries = with_retries(get_fallback_matches)

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
