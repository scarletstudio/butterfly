import pytest

from pipeline.matching.core.engine import MatchingEngine
from pipeline.matching.evaluation.metrics import MatchingMetricsCollector
from pipeline.types import (
    Match,
    MatchingInput,
    MatchingMetrics,
    MatchMetadata,
    User,
)


def test_analytics_logic():

    # This test verifies the behavior of the internal analyzer w/ a simple case

    users = [
        User(uid="A", displayName="User A"),
        User(uid="B", displayName="User B"),
        User(uid="C", displayName="User C"),
        User(uid="D", displayName="User D"),
        User(uid="E", displayName="User E"),
    ]
    matches = [Match(users={"A", "B"}), Match(users={"C", "D"})]
    user_analytics = MatchingMetricsCollector()
    actual = user_analytics.count_proposed_matches_per_user(
        users, iter(matches)
    )
    expected = MatchingMetrics(
        n_proposed_matches_per_user={"A": 1, "B": 1, "C": 1, "D": 1, "E": 0}
    )

    assert actual == expected.n_proposed_matches_per_user


def test_multiple_match_return():

    # This test verifies the behavior of the internal analyzer when a ranker returns multiple matches for a user

    users = [
        User(uid="A", displayName="User A"),
        User(uid="B", displayName="User B"),
        User(uid="C", displayName="User C"),
        User(uid="D", displayName="User D"),
        User(uid="E", displayName="User E"),
    ]
    matches = [
        Match(users={"A", "B"}),
        Match(users={"A", "C"}),
        Match(users={"A", "D"}),
        Match(users={"B", "C"}),
    ]
    user_analytics = MatchingMetricsCollector()
    actual = user_analytics.count_proposed_matches_per_user(
        users, iter(matches)
    )
    expected = MatchingMetrics(
        n_proposed_matches_per_user={"A": 3, "B": 2, "C": 2, "D": 1, "E": 0}
    )

    assert actual == expected.n_proposed_matches_per_user


def test_no_match_return():

    # This test verifies the behavior of the internal analyzer when a ranker returns a match w/ no users

    users = [
        User(uid="A", displayName="User A"),
        User(uid="B", displayName="User B"),
        User(uid="C", displayName="User C"),
        User(uid="D", displayName="User D"),
        User(uid="E", displayName="User E"),
    ]
    matches = [Match(users={})]
    user_analytics = MatchingMetricsCollector()
    actual = user_analytics.count_proposed_matches_per_user(
        users, iter(matches)
    )
    expected = MatchingMetrics(
        n_proposed_matches_per_user={"A": 0, "B": 0, "C": 0, "D": 0, "E": 0}
    )

    assert actual == expected.n_proposed_matches_per_user


def test_selection_rate_basic():
    match_blue = Match(
        users={}, metadata=MatchMetadata(generator="bluegenerator")
    )
    proposed_matches = [match_blue, match_blue, match_blue]
    selected_matches = [match_blue]

    collector = MatchingMetricsCollector()
    actual = collector.count_selection_rate_per_generator(
        proposed_matches, selected_matches
    )

    expected = {"bluegenerator": (1, 3)}
    assert actual == expected


def test_selection_rate_no_selected():
    match_blue = Match(
        users={}, metadata=MatchMetadata(generator="bluegenerator")
    )
    proposed_matches = [match_blue, match_blue, match_blue]
    selected_matches = []

    collector = MatchingMetricsCollector()
    actual = collector.count_selection_rate_per_generator(
        proposed_matches, selected_matches
    )

    expected = {"bluegenerator": (0, 3)}
    assert actual == expected


def test_selection_rate_multiple():
    match_blue = Match(
        users={}, metadata=MatchMetadata(generator="bluegenerator")
    )
    match_green = Match(
        users={}, metadata=MatchMetadata(generator="greengenerator")
    )

    proposed_matches = [match_blue, match_blue, match_blue, match_green]
    selected_matches = [match_blue, match_green]

    collector = MatchingMetricsCollector()
    actual = collector.count_selection_rate_per_generator(
        proposed_matches, selected_matches
    )

    expected = {"bluegenerator": (1, 3), "greengenerator": (1, 1)}
    assert actual == expected
