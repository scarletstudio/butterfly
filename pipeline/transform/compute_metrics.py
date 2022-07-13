import prefect
from prefect import task

from pipeline.matching.evaluation import MatchingMetricsCollector
from pipeline.types import MatchingMetrics, MatchingOutput


@task
def compute_internal_matching_metrics(
    output: MatchingOutput,
) -> MatchingMetrics:
    logger = prefect.context.get("logger")
    metrics = MatchingMetricsCollector()
    metrics_output = metrics.count_proposed_matches_per_user(
        output.users, iter(output.internal_data.ranked_matches)
    )
    n_proposed_matches_per_user = {
        uid.replace(
            uid,
            next(
                (user.displayName for user in output.users if user.uid == uid),
                "Unknown",
            ),
        ): count
        for uid, count in metrics_output.items()
    }
    logger.info("Generating internal matching metrics")
    return MatchingMetrics(
        n_proposed_matches_per_user=n_proposed_matches_per_user
    )
