import pandas as pd
import prefect
from prefect import task
from pipeline.schema.match import Match
from pipeline.utils.release import from_release_tag


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
