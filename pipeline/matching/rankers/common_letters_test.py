from pipeline.matching.rankers.common_letters import rank_common_letters
from pipeline.types import Match, MatchingInput, MatchMetadata


def test_rank_common_letters():
    inp = MatchingInput(
        community="test", release="2022-04-01", users=[], recent_matches=[]
    )
    metadata_1 = MatchMetadata(
        generator="commonLettersGenerator", commonLetters=["c", "a", "r"]
    )
    metadata_2 = MatchMetadata(
        generator="commonLettersGenerator", commonLetters=["j", "i"]
    )
    proposed = [
        Match(users={"A", "B"}),
        Match(users={"C", "D"}, metadata=metadata_1),
        Match(users={"E", "F"}, metadata=metadata_2),
    ]
    actual = list(rank_common_letters(inp, proposed))
    expected = [
        Match(users={"C", "D"}, metadata=metadata_1),
        Match(users={"E", "F"}, metadata=metadata_2),
        Match(users={"A", "B"}),
    ]
    assert actual == expected
