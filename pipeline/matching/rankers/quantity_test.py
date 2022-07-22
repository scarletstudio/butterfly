import pytest

from pipeline.matching.rankers import QuantityRanker
from pipeline.types import Match, MatchingInput, User


def test_example():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[],
    )
    proposed = [
        Match(users={"A", "B"}),
        Match(users={"A", "C"}),
        Match(users={"A", "D"}),
        Match(users={"B", "C"}),
    ]

    ranker = QuantityRanker()
    actual = list(ranker.rank(inp, iter(proposed)))

    expected = [
        Match(users={"A", "D"}),
        Match(users={"B", "C"}),
        Match(users={"A", "B"}),
        Match(users={"A", "C"}),
    ]
    assert actual == expected


def test_example2():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[],
    )
    proposed = [
        Match(users={"A", "B", "C"}),  # total num of matches is 5
        Match(users={"A", "C", "E"}),  # total is 6
        Match(users={"E", "D", "F"}),  # total is 4
        Match(users={"X", "Y", "Z"}),  # total is 3
    ]
    # A:2 C:2 E:2 BDFXYZ:1
    ranker = QuantityRanker()
    actual = list(ranker.rank(inp, iter(proposed)))

    expected = [
        Match(users={"X", "Y", "Z"}),
        Match(users={"E", "D", "F"}),
        Match(users={"A", "B", "C"}),
        Match(users={"A", "C", "E"}),
    ]
    assert actual == expected


def test_example3():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[],
    )
    proposed = [
        Match(users={"X", "B"}),  # 2.5
        Match(users={"Z", "B"}),  # 2.5
        Match(users={"E", "C"}),  # 2
        Match(users={"A", "B", "C"}),  # 2.33
        Match(users={"E", "B"}),  # 3
    ]

    ranker = QuantityRanker()
    actual = list(ranker.rank(inp, iter(proposed)))

    expected = [
        Match(users={"E", "C"}),
        Match(users={"A", "B", "C"}),
        Match(users={"X", "B"}),
        Match(users={"Z", "B"}),
        Match(users={"E", "B"}),
    ]

    """expected = [
        Match(users={"E", "C"}),
        Match(users={"X", "B"}),
        Match(users={"Z", "B"}),
        Match(users={"E", "B"}),
        Match(users={"A", "B", "C"}),
    ]"""
    assert actual == expected
