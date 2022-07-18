import prefect
from prefect import task

from pipeline.matching.evaluation import MatchingMetricsCollector
from pipeline.types import MatchingMetrics, MatchingOutput


@task
def compute_internal_matching_metrics(
    output: MatchingOutput,
) -> MatchingMetrics:
    logger = prefect.context.get("logger")
    metric = MatchingMetricsCollector()
    metric_output = metric.count_proposed_matches_per_user(
        output.users, iter(output.internal_data.ranked_matches)
    )
    return MatchingMetrics(n_proposed_matches_per_user=metric_output)
