import pytest

from pipeline.types import Match, MatchingInput


# TODO: Remove @pytest.mark.skip() to run your test
@pytest.mark.skip()
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

    # TODO: Replace with your generate function
    actual = []

    expected = [
        Match(users={"A", "D"}),
        Match(users={"B", "C"}),
        Match(users={"A", "B"}),
        Match(users={"A", "C"}),
    ]
    assert actual == expected


# TODO: Add more test cases for your logic
