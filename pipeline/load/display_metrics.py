import operator

import prefect
from prefect import task

from pipeline.types import MatchingMetrics, MatchingOutput, User


@task
def display_internal_matching_metrics(
    output: MatchingOutput, metric: MatchingMetrics, return_metric=False
):
    logger = prefect.context.get("logger")
    display_names = [user.displayName for user in output.users]
    unique_names = set()
    duplicate_names = []
    for name in display_names:
        if name in unique_names:
            duplicate_names.append(name)
        else:
            unique_names.add(name)
    unique_users = [
        user for user in output.users if user.displayName not in duplicate_names
    ]
    alter_metric_output = {
        uid.replace(
            uid,
            next(
                (user.displayName for user in unique_users if user.uid == uid),
                "Unknown",
            ),
        ): count
        for uid, count in metric.n_proposed_matches_per_user.items()
    }
    if "Unknown" in alter_metric_output:
        del alter_metric_output["Unknown"]
    for user in output.users:
        if user.displayName in duplicate_names:
            alter_metric_output[
                f"{user.displayName} (uid: {user.uid})"
            ] = metric.n_proposed_matches_per_user[user.uid]
    n_proposed_matches_per_user = dict(
        sorted(
            alter_metric_output.items(),
            key=operator.itemgetter(1),
            reverse=True,
        )
    )
    if return_metric:
        return n_proposed_matches_per_user
    logger.info("Generating internal matching metrics")
    logger.info("Displaying number of proposed matches per user")
    logger.info(
        "Matches Proposed per User:\n"
        + "\n".join(
            f"{count} - {user}"
            for user, count in n_proposed_matches_per_user.items()
        )
    )
