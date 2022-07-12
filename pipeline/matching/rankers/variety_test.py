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

    assert actual == expected


def test_1():  # testing for dup_gencheck
    metadata_1 = MatchMetadata(generator="blueGenerator")
    metadata_2 = MatchMetadata(generator="greenGenerator")
    past_match = Match(
        users={"A", "B"}, metadata=metadata_1
    )  # uses 'blueGenerator'
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[past_match],
    )
    # raises error if proposed is a list
    proposed = Match(
        users={"A", "B"}, metadata=metadata_2
    )  # uses 'greenGenerator', same users as past_match

    actual = variety.dup_gencheck(
        inp.recent_matches, proposed
    )  # run dup_gencheck
    expected = False  # no duplicates is to be expected
    """Although the 'proposed' users is the same as those in 'past_match',
    no duplicates will be found because of the use of different generators. """
    assert actual == expected  # verifying there is no duplicates


def test_2():  # similar to 'test_1' test case
    metadata_1 = MatchMetadata(generator="blueGenerator")
    metadata_2 = MatchMetadata(generator="greenGenerator")
    past_match = Match(users={"A", "B"}, metadata=metadata_1)
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[past_match],
    )

    proposed = Match(
        users={"C", "D"}, metadata=metadata_1
    )  # different users, same generator as 'past_match'

    actual = variety.dup_gencheck(inp.recent_matches, proposed)
    expected = False  # no duplicates is to be expected
    """Test case passes due to having a different pair of users
    despite having the same generator"""
    assert actual == expected  # verifying there is no duplicates


def test_3():
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

    assert actual == expected
