from pipeline.matching.rankers import MultiRanker
from pipeline.types import Match, MatchingInput


def test_no_rankers():
    inp = MatchingInput(
        community="test", release="2022-04-01", users=[], recent_matches=[]
    )
    proposed = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    ranker = MultiRanker(rankers=[])
    actual = ranker.rank(inp, proposed)
    expected = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    assert list(actual) == expected
