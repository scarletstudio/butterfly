import datetime
from typing import Dict

import pandas as pd
import prefect
from prefect import task

from pipeline.matching.core.release import from_release_tag, to_release_tag
from pipeline.schema.match import Match
from pipeline.utils.constants import MS

DatabasePath = str
RecordsToDelete = Dict[DatabasePath, None]


@task
def delete_previous_release(
    db,
    community: str,
    release_tag: str,
    now: datetime.datetime,
    force: bool = False,
):
    logger = prefect.context.get("logger")
    release = from_release_tag(release_tag)
    if force:
        logger.info("Proceeding with forced deletion.")
    elif release < now:
        logger.warning(
            (
                "You are trying to delete a past round of matches.\n"
                "Are you sure?\n"
                "This will also delete any chats from those matches.\n"
                "Skipped deleting records.\n"
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
    deleted_chats: RecordsToDelete = {}
    for match in match_records.values():
        deleted_chats[match["id"]] = None

    # Only remove if records are found, otherwise, we might accidentally
    # delete all match user-records!
    if match_records:
        deleted_matches: RecordsToDelete = {key: None for key in match_records}
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
    load_release_tag: str,
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
        release_tag = to_release_tag(m.release)  # type: ignore
        if release_tag != load_release_tag:
            logger.warning(
                f"Skipped loading match for a different release: {release_tag}"
            )
            continue
        release_ts = m.release.timestamp() * MS  # type: ignore
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
