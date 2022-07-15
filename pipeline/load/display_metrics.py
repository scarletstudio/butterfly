from operator import itemgetter
from typing import Dict, List

import prefect
from prefect import task

from pipeline.types import MatchingMetrics, MatchingOutput, User, UserId


def render_counts_per_user(users: List[User], counts: Dict[UserId, int]) -> str:
    """Helper method to get log of counts per user in descending order."""
    display_names = {user.uid: user.displayName for user in users}
    # Sort entries by count in descending order
    sorted_items = sorted(counts.items(), key=itemgetter(1), reverse=True)
    lines = []
    for uid, count in sorted_items:
        name = display_names.get(uid)
        lines.append(f"{count} - {name} ({uid})")
    joined = "\n".join(lines)
    return joined


@task
def display_internal_matching_metrics(
    output: MatchingOutput, metrics: MatchingMetrics
):
    """Task to display matching engine metrics."""
    logger = prefect.context.get("logger")
    proposed_matches_per_user = render_counts_per_user(
        output.users, metrics.n_proposed_matches_per_user
    )
    logger.info(f"\nMatches Proposed per User:\n{proposed_matches_per_user}")
