import pandas as pd
import prefect
from prefect import task

from pipeline.types import Community, Match


@task
def extract_recent_matches(db, community: Community) -> pd.DataFrame:
    logger = prefect.context.get("logger")
    matches_ref = db.reference(f"matches/{community}")
    user_match_records = matches_ref.get()
    if not user_match_records:
        logger.info(f"No user-match records for commmnity: {community}")
        return pd.DataFrame()
    logger.info(f"Extracted {len(user_match_records)} user-match records.")

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
            release=record["release_tag"],
            key=match_key,
            title=record["title"],
            metadata=record.get("metadata", {}),
        )
        recent_match_records.append(match)
    logger.info(f"Converted to {len(recent_match_records)} match records.")

    df_recent_matches = pd.DataFrame(recent_match_records)
    logger.info("Returned {} rows, {} cols.".format(*df_recent_matches.shape))
    return df_recent_matches
