from pipeline.matching.rankers import DefaultRanker
from pipeline.types import Match, MatchingInput


def test_rank_pass():
    inp = MatchingInput(
        community="test", release="2022-04-01", users=[], recent_matches=[]
    )
    proposed = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    ranker = DefaultRanker()
    actual = ranker.rank(inp, proposed)
    expected = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    assert list(actual) == expected
