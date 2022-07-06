import pytest

from pipeline.matching.core.analytics import CollectInternalAnalytics
from pipeline.matching.core.engine import MatchingEngine
from pipeline.types import Match, MatchingInput, MatchingInternalAnalytics, User


@pytest.mark.skip()
def test_analytics_logic():

    users = [
        User(uid="A", displayName="User A"),
        User(uid="B", displayName="User B"),
        User(uid="C", displayName="User C"),
        User(uid="D", displayName="User D"),
        User(uid="E", displayName="User E"),
    ]
    matches = [Match(users={"A", "B"}), Match(users={"C", "D"})]
    user_analytics = CollectInternalAnalytics()
    actual = user_analytics.n_proposed_matches_per_user(users, iter(matches))
    expected = MatchingInternalAnalytics(
        n_proposed_matches_per_user={"A": 1, "B": 1, "C": 1, "D": 1, "E": 0}
    )

    assert actual == expected

    # This test varifies the behavior of the internal analyzer w/ a simple case


@pytest.mark.skip()
def test_multiple_match_return():

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
    user_analytics = CollectInternalAnalytics()
    actual = user_analytics.n_proposed_matches_per_user(users, iter(matches))
    expected = MatchingInternalAnalytics(
        n_proposed_matches_per_user={"A": 3, "B": 2, "C": 2, "D": 1, "E": 0}
    )

    assert actual == expected

    # This test varifies the behavior of the internal analyzer when a ranker returns multiple matches for a user


@pytest.mark.skip()
def test_no_match_return():

    users = [
        User(uid="A", displayName="User A"),
        User(uid="B", displayName="User B"),
        User(uid="C", displayName="User C"),
        User(uid="D", displayName="User D"),
        User(uid="E", displayName="User E"),
    ]
    matches = [Match(users={})]
    user_analytics = CollectInternalAnalytics()
    actual = user_analytics.n_proposed_matches_per_user(users, iter(matches))
    expected = MatchingInternalAnalytics(
        n_proposed_matches_per_user={"A": 0, "B": 0, "C": 0, "D": 0, "E": 0}
    )

    assert actual == expected

    # This test varifies the behavior of the internal analyzer when a ranker returns a match w/ no users
