from pipeline.matching.rankers.default import no_ranker
from pipeline.types import Match, MatchingInput


def test_no_ranker():
    inp = MatchingInput(
        community="test", release="2022-04-01", users=[], recent_matches=[]
    )
    proposed = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    actual = no_ranker(inp, proposed)
    expected = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    assert list(actual) == expected
