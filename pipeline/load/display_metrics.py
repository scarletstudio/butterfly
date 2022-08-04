from operator import itemgetter
from typing import Dict, List

import prefect
from prefect import task

from pipeline.matching.evaluation.metrics import MatchingMetricsCollector
from pipeline.types import Match, MatchingMetrics, MatchingOutput, User, UserId


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


def render_user_emails(users: List[User]) -> str:
    return "\n".join([u.email for u in users])


def dispaly_intent_distribution_in_matches(matches: List[Match]):
    distribution = (
        MatchingMetricsCollector().intent_distribution_in_selected_matches(
            matches
        )
    )

    output = ""
    for intent, count in distribution.items():
        output += str(intent) + " : " + str(count) + "\n"

    return output


def dispaly_intent_distribution_in_community(users: List[User]):
    (
        distribution_1,
        distribution_2,
    ) = MatchingMetricsCollector().intent_distribution_in_community(users)

    output = "Giving Intent:" + "\n"
    for intent, count in distribution_1.items():
        output += str(intent) + " : " + str(count) + "\n"

    output += "Seeking Intent:" + "\n"
    for intent, count in distribution_2.items():
        output += str(intent) + " : " + str(count) + "\n"

    return output


@task
def display_internal_matching_metrics(
    output: MatchingOutput, metrics: MatchingMetrics
):
    """Task to display matching engine metrics."""
    logger = prefect.context.get("logger")
    proposed_matches_per_user = render_counts_per_user(
        output.users, metrics.n_proposed_matches_per_user
    )
    matched_user_emails = render_user_emails(output.users)
    logger.info(f"\nMatches Proposed per User:\n{proposed_matches_per_user}")
    logger.info(f"\nEmails of Matched Users:\n{matched_user_emails}")
