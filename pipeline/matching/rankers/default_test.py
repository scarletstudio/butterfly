from pipeline.matching.rankers.default import rank_pass
from pipeline.types import Match, MatchingInput


def test_rank_pass():
    inp = MatchingInput(
        community="test", release="2022-04-01", users=[], recent_matches=[]
    )
    proposed = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    actual = rank_pass(inp, proposed)
    expected = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    assert list(actual) == expected
