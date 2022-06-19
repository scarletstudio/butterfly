import pytest

from pipeline.matching.rankers import MatchStarsRanker
from pipeline.types import Match, MatchingInput, MatchMetadata, MatchStars


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

    ranker = MatchStarsRanker()
    actual = list(ranker.rank(inp, proposed))

    expected = [
        Match(users={"C", "D"}, metadata=metadata_2),
        Match(users={"C", "D"}, metadata=metadata_1),
    ]
    # TODO: Uncomment this assertion and delete the proposed assert
    # assert actual == expected
    assert actual == proposed


# TODO: Add more test cases for your logic
