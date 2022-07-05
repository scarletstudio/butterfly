import pytest

from pipeline.matching.rankers import VarietyRanker
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
    # assert actual == expected
    assert actual == proposed


def test_nochange():
    metadata_1 = MatchMetadata(generator="blueGenerator")
    metadata_2 = MatchMetadata(generator="greenGenerator")
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[],
    )

    proposed = [
        Match(users={"A", "B"}, metadata=metadata_1),
        Match(users={"C", "D"}, metadata=metadata_2),
        Match(users={"A", "D"}, metadata=metadata_1),
    ]

    ranker = VarietyRanker()
    actual = list(ranker.rank(inp, proposed))

    expected = [
        Match(users={"A", "B"}, metadata=metadata_1),
        Match(users={"C", "D"}, metadata=metadata_2),
        Match(users={"A", "D"}, metadata=metadata_1),
    ]

    assert actual == expected


#     --- A B get matched on common letters 1 week -- previous match
# A B get matched on hiking (interests) -- proposed

# Keep the propsed in the same order since, we onl;y care about matches that have
# the same user and the same generator
