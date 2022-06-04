from pipeline.matching.generators.satirical_test import make_letter_metadata
from pipeline.matching.rankers.satirical import common_letter_ranker
from pipeline.types import Match, MatchingInput


def test_common_letter_ranker():
    inp = MatchingInput(
        community="test", release="2022-04-01", users=[], recent_matches=[]
    )
    proposed = [
        Match(users={"A", "B"}),
        Match(users={"C", "D"}, metadata=make_letter_metadata({"c", "a", "r"})),
        Match(users={"E", "F"}, metadata=make_letter_metadata({"j", "i"})),
    ]
    actual = list(common_letter_ranker(inp, proposed))
    expected = [
        Match(users={"C", "D"}, metadata=make_letter_metadata({"c", "a", "r"})),
        Match(users={"E", "F"}, metadata=make_letter_metadata({"j", "i"})),
        Match(users={"A", "B"}),
    ]
    assert actual == expected
