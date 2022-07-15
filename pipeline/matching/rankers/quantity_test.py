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
        Match(users={User(uid="A"), User(uid="B")}),
        Match(users={User(uid="A"), User(uid="C")}),
        Match(users={User(uid="A"), User(uid="D")}),
        Match(users={User(uid="B"), User(uid="C")}),
    ]

    ranker = QuantityRanker()
    actual = list(ranker.rank(inp, proposed))

    expected = [
        Match(users={User(uid="A"), User(uid="D")}),
        Match(users={User(uid="B"), User(uid="C")}),
        Match(users={User(uid="A"), User(uid="B")}),
        Match(users={User(uid="A"), User(uid="C")}),
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
        Match(
            users={User(uid="A"), User(uid="B"), User(uid="C")}
        ),  # total num of matches is 5
        Match(
            users={User(uid="A"), User(uid="C"), User(uid="E")}
        ),  # total is 6
        Match(
            users={User(uid="E"), User(uid="D"), User(uid="F")}
        ),  # total is 4
        Match(
            users={User(uid="X"), User(uid="Y"), User(uid="Z")}
        ),  # total is 3
    ]
    # A:2 C:2 E:2 BDFXYZ:1
    ranker = QuantityRanker()
    actual = list(ranker.rank(inp, proposed))

    expected = [
        Match(users={User(uid="X"), User(uid="Y"), User(uid="Z")}),
        Match(users={User(uid="E"), User(uid="D"), User(uid="F")}),
        Match(users={User(uid="A"), User(uid="B"), User(uid="C")}),
        Match(users={User(uid="A"), User(uid="C"), User(uid="E")}),
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
        Match(users={User(uid="X"), User(uid="B")}),  # 2.5
        Match(users={User(uid="Z"), User(uid="B")}),  # 2.5
        Match(users={User(uid="E"), User(uid="C")}),  # 2
        Match(users={User(uid="A"), User(uid="B"), User(uid="C")}),  # 2.33
        Match(users={User(uid="E"), User(uid="B")}),  # 3
    ]

    ranker = QuantityRanker()
    actual = list(ranker.rank(inp, proposed))

    expected = [
        Match(users={User(uid="E"), User(uid="C")}),
        Match(users={User(uid="A"), User(uid="B"), User(uid="C")}),
        Match(users={User(uid="X"), User(uid="B")}),
        Match(users={User(uid="Z"), User(uid="B")}),
        Match(users={User(uid="E"), User(uid="B")}),
    ]

    """expected = [
        Match(users={"E", "C"}),
        Match(users={"X", "B"}),
        Match(users={"Z", "B"}),
        Match(users={"E", "B"}),
        Match(users={"A", "B", "C"}),
    ]"""
    assert actual == expected
