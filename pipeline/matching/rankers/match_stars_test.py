import pytest

from pipeline.matching.rankers.default import rank_pass
from pipeline.types import Match, MatchingInput, MatchMetadata, MatchStars


# TODO: Remove @pytest.mark.skip() to run your test
@pytest.mark.skip()
def test_example():
    match_stars = [
        MatchStars(
            from_user="A",
            value=5,
            match="1",
            users={"A", "B"},
            generator="blueGenerator",
        )
    ]
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[],
        match_stars=match_stars,
    )
    metadata_1 = MatchMetadata(generator="greenGenerator")
    metadata_2 = MatchMetadata(generator="blueGenerator")
    proposed = [
        Match(users={"C", "D"}, metadata=metadata_1),
        Match(users={"C", "D"}, metadata=metadata_2),
    ]

    # TODO: Replace with your generate function
    actual = []

    expected = [
        Match(users={"C", "D"}, metadata=metadata_2),
        Match(users={"C", "D"}, metadata=metadata_1),
    ]
    assert actual == expected


# TODO: Add more test cases for your logic
