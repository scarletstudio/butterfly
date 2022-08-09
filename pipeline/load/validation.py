from typing import List

import prefect
from prefect import task

from pipeline.matching.evaluation.validation import (
    MatchValidationError,
    validate_matches,
)
from pipeline.types import Match, User


@task
def validate_and_log_matches(
    users: List[User], recent_matches: List[Match], output_matches: List[Match]
) -> bool:
    logger = prefect.context.get("logger")
    names = {u.uid: u.displayName for u in users}
    for m in output_matches:
        match_names = ", ".join([names[uid] for uid in m.users])
        generator = m.metadata.generator
        logger.info(f"\t{match_names} ({generator})")
    try:
        total, t2, t3 = validate_matches(output_matches, users, recent_matches)
    except MatchValidationError as err:
        logger.warning("FAIL: Output matches passed validation.")
        logger.warning(str(err))
        return False
    logger.info(f"\tTotal = {total}, T2: {t2}, T3: {t3}")
    logger.info("PASS: Output matches passed validation.")
    return True
