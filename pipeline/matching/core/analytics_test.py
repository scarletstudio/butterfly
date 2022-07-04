from unittest.mock import MagicMock

import pytest

from pipeline.matching.core.analytics import CollectInternalAnalytics
from pipeline.matching.core.engine import MatchingEngine
from pipeline.types import Match, MatchingInput, MatchingInternalAnalytics, User


def test_analytics_logic():

    users = [
        User(uid="A", displayName="User A"),
        User(uid="B", displayName="User B"),
        User(uid="C", displayName="User C"),
        User(uid="D", displayName="User D"),
        User(uid="E", displayName="User E"),
    ]
    recent_matches = [Match(users={"A", "B"}), Match(users={"C", "D", "E"})]
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=users,
        recent_matches=recent_matches,
    )
    mock_generator = MagicMock()
    mock_generator.generate = MagicMock(
        return_value=[
            Match(users={"A", "B"}),
            Match(users={"C", "D"}),
        ]
    )
    mock_ranker = MagicMock()
    mock_ranker.rank = MagicMock(return_value=[Match(users={"A", "D"})])
    test_matching_engine = MatchingEngine(
        name="testEngine",
        generators=[mock_generator],
        ranker=mock_ranker,
        finalizer=[],
    )
    user_analytics = CollectInternalAnalytics(
        name="Analytics for number of proposed matches per user",
        matching_engine=test_matching_engine,
    )

    MatchingEngine.analytics = user_analytics.n_proposed_matches_per_user(inp)

    expected_analytics = MatchingInternalAnalytics(
        n_proposed_matches_per_user=[
            (User(uid="A", displayName="User A"), 1),
            (User(uid="B", displayName="User B"), 0),
            (User(uid="C", displayName="User C"), 0),
            (User(uid="D", displayName="User D"), 1),
            (User(uid="E", displayName="User E"), 0),
        ]
    )

    assert MatchingEngine.analytics == expected_analytics

    # This test varifies the behavior of the internal analyzer w/ a simple case


def test_multiple_match_return():

    users = [
        User(uid="A", displayName="User A"),
        User(uid="B", displayName="User B"),
        User(uid="C", displayName="User C"),
        User(uid="D", displayName="User D"),
        User(uid="E", displayName="User E"),
    ]
    recent_matches = [Match(users={"A", "B"}), Match(users={"C", "D", "E"})]
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=users,
        recent_matches=recent_matches,
    )
    mock_generator = MagicMock()
    mock_generator.generate = MagicMock(
        return_value=[
            Match(users={"A", "B"}),
            Match(users={"C", "D"}),
            Match(users={"A", "D"}),
        ]
    )
    mock_ranker = MagicMock()
    mock_ranker.rank = MagicMock(
        return_value=[
            Match(users={"A", "B"}),
            Match(users={"A", "C"}),
            Match(users={"A", "D"}),
            Match(users={"B", "C"}),
        ]
    )
    test_matching_engine = MatchingEngine(
        name="testEngine",
        generators=[mock_generator],
        ranker=mock_ranker,
        finalizer=[],
    )
    user_analytics = CollectInternalAnalytics(
        name="Analytics for number of proposed matches per user",
        matching_engine=test_matching_engine,
    )

    MatchingEngine.analytics = user_analytics.n_proposed_matches_per_user(inp)

    expected = MatchingInternalAnalytics(
        n_proposed_matches_per_user=[
            (User(uid="A", displayName="User A"), 3),
            (User(uid="B", displayName="User B"), 2),
            (User(uid="C", displayName="User C"), 2),
            (User(uid="D", displayName="User D"), 1),
            (User(uid="E", displayName="User E"), 0),
        ]
    )

    assert MatchingEngine.analytics == expected

    # This test varifies the behavior of the internal analyzer when a ranker returns multiple matches for a user


def test_no_match_return():

    users = [
        User(uid="A", displayName="User A"),
        User(uid="B", displayName="User B"),
        User(uid="C", displayName="User C"),
        User(uid="D", displayName="User D"),
        User(uid="E", displayName="User E"),
    ]
    recent_matches = [Match(users={"A", "B"}), Match(users={"C", "D", "E"})]
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=users,
        recent_matches=recent_matches,
    )
    mock_generator = MagicMock()
    mock_generator.generate = MagicMock(
        return_value=[
            Match(users={"A", "B"}),
            Match(users={"C", "D"}),
        ]
    )
    mock_ranker = MagicMock()
    mock_ranker.rank = MagicMock(return_value=[Match(users={})])
    test_matching_engine = MatchingEngine(
        name="testEngine",
        generators=[mock_generator],
        ranker=mock_ranker,
        finalizer=[],
    )
    user_analytics = CollectInternalAnalytics(
        name="Analytics for number of proposed matches per user",
        matching_engine=test_matching_engine,
    )

    MatchingEngine.analytics = user_analytics.n_proposed_matches_per_user(inp)

    expected_analytics = MatchingInternalAnalytics(
        n_proposed_matches_per_user=[
            (User(uid="A", displayName="User A"), 0),
            (User(uid="B", displayName="User B"), 0),
            (User(uid="C", displayName="User C"), 0),
            (User(uid="D", displayName="User D"), 0),
            (User(uid="E", displayName="User E"), 0),
        ]
    )

    assert MatchingEngine.analytics == expected_analytics

    # This test varifies the behavior of the internal analyzer when a ranker returns a match w/ no users
