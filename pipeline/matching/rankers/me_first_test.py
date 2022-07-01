from pipeline.matching.rankers import MeFirstRanker
from pipeline.types import Match, MatchingInput


def test_rank_me_first():
    inp = MatchingInput(
        community="test", release="2022-04-01", users=[], recent_matches=[]
    )

    proposed = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    ranker = MeFirstRanker(my_uid="A")
    actual = ranker.rank(inp, proposed)

    expected = [Match(users={"A", "B"}), Match(users={"C", "D"})]
    assert list(actual) == expected


def test_rank_me_not_found():
    inp = MatchingInput(
        community="test", release="2022-04-01", users=[], recent_matches=[]
    )

    proposed = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    ranker = MeFirstRanker(my_uid="F")
    actual = ranker.rank(inp, proposed)

    expected = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    assert list(actual) == expected
