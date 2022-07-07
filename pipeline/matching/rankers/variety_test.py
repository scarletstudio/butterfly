import pytest

from pipeline.matching.rankers import VarietyRanker, variety
from pipeline.types import Match, MatchingInput, MatchMetadata


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

    ranker = VarietyRanker()
    actual = list(ranker.rank(inp, proposed))

    expected = [
        Match(users={"A", "D"}, metadata=metadata_2),
        Match(users={"A", "C"}, metadata=metadata_1),
    ]
    # TODO: Uncomment this assertion and delete the proposed assert
    assert actual == expected
    # assert actual == proposed


# TODO: Add more test cases for your logic
def test_1():  # testing for dup_gencheck
    metadata_1 = MatchMetadata(generator="blueGenerator")
    metadata_2 = MatchMetadata(generator="greenGenerator")
    past_match = Match(users={"A", "B"}, metadata=metadata_1)
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[past_match],
    )
    # raises error if proposed is a list
    proposed = Match(users={"A", "B"}, metadata=metadata_2)

    # checker = variety
    actual = variety.dup_gencheck(inp.recent_matches, proposed)
    expected = False  # no duplicates is to be expected

    assert actual == expected  # verifying there is no duplicates


def test_2():
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
        Match(users={"A", "C"}, metadata=metadata_1),  # considered a duplicate
        Match(users={"A", "D"}, metadata=metadata_2),  # not a duplicate
        Match(users={"E", "F"}, metadata=metadata_1),
        Match(
            users={"G", "F"}, metadata=metadata_1
        ),  # a duplicate within proposed
    ]

    ranker = VarietyRanker()
    actual = list(ranker.rank(inp, proposed))

    expected = [
        Match(users={"A", "D"}, metadata=metadata_2),
        Match(users={"E", "F"}, metadata=metadata_1),
        Match(users={"G", "F"}, metadata=metadata_1),
        Match(users={"A", "C"}, metadata=metadata_1),  # expected to be lower
    ]
    # TODO: Uncomment this assertion and delete the proposed assert
    assert actual == expected
