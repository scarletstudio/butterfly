from pipeline.matching.rankers.recent_repeat import (
    get_avoid_recent_repeat_ranker,
    get_exclude_recent_repeat_ranker,
)
from pipeline.types import Match, MatchingInput


def test_avoid_recent_repeat_ranker():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[Match(users={"D", "C"})],
    )
    proposed = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    ranker = get_avoid_recent_repeat_ranker()
    actual = list(ranker(inp, proposed))
    expected = [Match(users={"A", "B"}), Match(users={"C", "D"})]
    assert actual == expected


def test_exclude_recent_repeat_ranker():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[Match(users={"D", "C"})],
    )
    proposed = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    ranker = get_exclude_recent_repeat_ranker()
    actual = list(ranker(inp, proposed))
    expected = [Match(users={"A", "B"})]
    assert actual == expected
