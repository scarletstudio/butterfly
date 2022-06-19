from pipeline.matching.rankers import RecentRepeatsRanker
from pipeline.types import Match, MatchingInput


def test_rank_avoid_recent_repeats():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[Match(users={"D", "C"})],
    )
    proposed = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    ranker = RecentRepeatsRanker()
    actual = list(ranker.rank(inp, proposed))
    expected = [Match(users={"A", "B"}), Match(users={"C", "D"})]
    assert actual == expected


def test_rank_exclude_recent_repeats():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[Match(users={"D", "C"})],
    )
    proposed = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    ranker = RecentRepeatsRanker(include_repeats=False)
    actual = list(ranker.rank(inp, proposed))
    expected = [Match(users={"A", "B"})]
    assert actual == expected
