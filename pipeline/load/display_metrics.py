from operator import itemgetter
from typing import Dict, List, Tuple

import prefect
from prefect import task

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


def render_intent_distribution_in_matches(distribution: Dict[str, int]):
    # metrics. distribution_in_final_set
    output = ""
    for intent, count in distribution.items():
        output += str(intent) + " : " + str(count) + "\n"

    return output


def render_intent_distribution_in_community(
    distribution: Tuple[Dict[str, int], Dict[str, int]]
):
    (
        distribution_1,
        distribution_2,
    ) = distribution

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
    counts_per_intent_in_matches = render_intent_distribution_in_matches(
        metrics.distribution_in_final_set
    )
    counts_per_intent_in_community = render_intent_distribution_in_community(
        metrics.distribution_in_community
    )

    logger.info(f"\nMatches Proposed per User:\n{proposed_matches_per_user}")
    logger.info(f"\nEmails of Matched Users:\n{matched_user_emails}")
    logger.info(
        f"\nTotal Count of Intent in Final Set of Matches:\n{counts_per_intent_in_matches}"
    )
    logger.info(
        f"\nTotal Count of Intent in Community:\n{counts_per_intent_in_community}"
    )
