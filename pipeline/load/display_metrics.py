import prefect
from prefect import task

from pipeline.transform import compute_internal_matching_metrics
from pipeline.types import Match, MatchingMetrics, MatchingOutput, User


@task
def display_internal_matching_metrics(metric: MatchingMetrics):
    logger = prefect.context.get("logger")
    logger.info("Displaying number of proposed matches per user")
    print(f"Matches Proposed per User:\n")
    for uid, count in metric.n_proposed_matches_per_user.items():
        print(f"{count} - User {uid}\n")
