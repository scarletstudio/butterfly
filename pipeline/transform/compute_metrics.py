from typing import Iterator, List

import prefect
from prefect import task

from pipeline.matching.evaluation import MatchingMetricsCollector
from pipeline.types import Match, MatchingMetrics, MatchingOutput, User


@task
def compute_internal_matching_metrics(
    users: List[User], ranked_matches: Iterator[Match]
) -> MatchingMetrics:
    logger = prefect.context.get("logger")
    metrics = MatchingMetricsCollector()
    n_proposed_matches_per_user = metrics.count_proposed_matches_per_user(
        users, ranked_matches
    )
    logger.info("Generating internal matching metrics")
    return MatchingMetrics(
        n_proposed_matches_per_user=n_proposed_matches_per_user
    )
