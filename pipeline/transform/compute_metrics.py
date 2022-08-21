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
    metric_match_number_of_users_based_on_intent = (
        metric.intent_distribution_in_selected_matches(output.matches)
    )
    (
        metric_community_number_of_users_based_on_intent_1,
        metric_community_number_of_users_based_on_intent_2,
    ) = metric.intent_distribution_in_community(output.users)

    return MatchingMetrics(
        n_proposed_matches_per_user=metric_output,
        distribution_in_final_set=metric_match_number_of_users_based_on_intent,
        distribution_in_community=(
            metric_community_number_of_users_based_on_intent_1,
            metric_community_number_of_users_based_on_intent_2,
        ),
    )
