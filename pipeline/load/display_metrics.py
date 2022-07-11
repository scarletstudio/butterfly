from typing import Iterator, List

import prefect
from prefect import task

from pipeline.transform import compute_internal_matching_metrics
from pipeline.types import Match, MatchingOutput, User


@task
def display_internal_matching_metrics(
    users: List[User], ranked_matches: Iterator[Match]
):
    logger = prefect.context.get("logger")
    metrics_output = compute_internal_matching_metrics(users, ranked_matches)
    logger.info("Displaying number of proposed matches per user")
    print(f"Matches Proposed per User:\n")
    for uid, count in metrics_output.n_proposed_matches_per_user.items():
        print(f"{count} - User {uid}\n")
