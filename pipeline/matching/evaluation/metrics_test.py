import pytest

from pipeline.matching.core.engine import MatchingEngine
from pipeline.matching.evaluation.metrics import MatchingMetricsCollector
from pipeline.types import (
    Intent,
    IntentMatch,
    Match,
    MatchingInput,
    MatchingMetrics,
    MatchMetadata,
    Side,
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


def test_intent_distribution_of_selected_matches():

    # This test verifies the behavior of the internal analyzer w/ a simple case
    matches = [
        Match(
            users={"1", "3"},
            metadata=MatchMetadata(
                generator="similarIntentsGenerator",
                score=1,
                intents=[
                    IntentMatch(code="guitar", seeker="3", giver="1"),
                    IntentMatch(code="sing", seeker="1", giver="3"),
                ],
            ),
        ),
        Match(
            users={"2", "4"},
            metadata=MatchMetadata(
                generator="similarIntentsGenerator",
                score=1,
                intents=[
                    IntentMatch(code="chess", seeker="4", giver="2"),
                    IntentMatch(code="tutoring", seeker="2", giver="4"),
                ],
            ),
        ),
        Match(
            users={"1", "3"},
            metadata=MatchMetadata(
                generator="rareIntentsGenerator",
                rareIntents=[IntentMatch(code="comedy", seeker="1", giver="3")],
            ),
        ),
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="similarInterestsGenerator",
                commonInterests=["painting"],
            ),
        ),
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="limitedSchedulesGenerator",
            ),
        ),
    ]

    match_analytics = MatchingMetricsCollector()
    actual = match_analytics.intent_distribution_in_selected_matches(matches)

    expected = {"guitar": 1, "chess": 1, "sing": 1, "comedy": 1, "tutoring": 1}

    assert actual == expected


def test_intent_distribution_in_community():

    tutoring = Intent(code="tutoring", name="Tutoring", side=Side.BLANK)
    seek_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.SEEKING)
    give_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.GIVING)
    comedy = Intent(code="comedy", name="Comedy", side=Side.BLANK)
    seek_comedy = Intent(code="comedy", name="Comedy", side=Side.SEEKING)
    give_comedy = Intent(code="comedy", name="Comedy", side=Side.GIVING)

    users = [
        User(
            uid="A", displayName="User A", intents=[seek_tutoring, seek_comedy]
        ),
        User(uid="B", displayName="User B", intents=[seek_tutoring]),
        User(
            uid="C", displayName="User C", intents=[give_tutoring, seek_comedy]
        ),
        User(
            uid="D", displayName="User D", intents=[seek_tutoring, give_comedy]
        ),
    ]

    match_analytics = MatchingMetricsCollector()
    actual_1, actual_2 = match_analytics.intent_distribution_in_community(users)

    # will return two dictionaries,
    # first is the givers and their count and second are the seekers and their count

    expected_1 = {"tutoring": 1, "comedy": 1}
    expected_2 = {"tutoring": 3, "comedy": 2}

    actual_1 == expected_1
    actual_2 == expected_2
