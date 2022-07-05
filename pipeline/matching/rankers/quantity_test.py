import pytest

from pipeline.matching.rankers import QuantityRanker
from pipeline.types import Match, MatchingInput


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
    actual = list(ranker.rank(inp, proposed))

    expected = [
        Match(users={"A", "D"}),
        Match(users={"B", "C"}),
        Match(users={"A", "B"}),
        Match(users={"A", "C"}),
    ]
    assert actual == expected


# TODO: Add more test cases for your logic
