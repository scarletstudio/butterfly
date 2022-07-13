import prefect
from prefect import task

from pipeline.types import MatchingMetrics


@task
def display_internal_matching_metrics(metric: MatchingMetrics):
    logger = prefect.context.get("logger")
    logger.info("Displaying number of proposed matches per user")
    logger.info(
        "Matches Proposed per User:\n"
        + "\n".join(
            [
                f"{count} - {user}"
                for user, count in metric.n_proposed_matches_per_user.items()
            ]
        )
    )
