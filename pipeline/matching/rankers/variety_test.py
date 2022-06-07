import pytest

from pipeline.types import Match, MatchingInput, MatchMetadata


# TODO: Remove @pytest.mark.skip() to run your test
@pytest.mark.skip()
def test_example():
    metadata_1 = MatchMetadata(generator="blueGenerator")
    metadata_2 = MatchMetadata(generator="greenGenerator")
    past_match = Match(users={"A", "B"}, metadata=metadata_1)
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[past_match],
    )
    proposed = [
        Match(users={"A", "C"}, metadata=metadata_1),
        Match(users={"A", "D"}, metadata=metadata_2),
    ]

    # TODO: Replace with your generate function
    actual = []

    expected = [
        Match(users={"A", "D"}, metadata=metadata_2),
        Match(users={"A", "C"}, metadata=metadata_1),
    ]
    assert actual == expected


# TODO: Add more test cases for your logic
