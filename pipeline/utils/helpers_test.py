import pytest

from pipeline.types import Match
from pipeline.utils.helpers import find_match_of_3


def test_returns_match_of_three():
    matches = [
        Match(users={"A", "B", "C"}),
        Match(users={"D", "C"}),
        Match(users={"A", "D"}),
        Match(users={"A", "B"}),
    ]
    actual = find_match_of_3(matches)
    expected = Match(users={"A", "B", "C"})

    assert actual == expected


def test_returns_middle_match():
    matches = [
        Match(users={"A", "B"}),
        Match(users={"D", "C"}),
        Match(users={"A", "D", "B"}),
        Match(users={"A", "B"}),
    ]
    actual = find_match_of_3(matches)
    expected = Match(users={"A", "D", "B"})

    assert actual == expected


def test_of_no_match_of_three():
    matches = [
        Match(users={"A", "B"}),
        Match(users={"D", "C"}),
        Match(users={"A", "D"}),
        Match(users={"A", "B"}),
    ]
    actual = find_match_of_3(matches)
    expected = None

    assert actual == expected
