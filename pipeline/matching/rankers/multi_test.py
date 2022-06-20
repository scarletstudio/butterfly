from typing import Iterator

from pipeline.matching.core import MatchRanker
from pipeline.matching.rankers import MultiRanker
from pipeline.types import Match, MatchingInput


class FakeUserRanker(MatchRanker):
    """
    Fake ranker for testing purposes.
    Prioritizes proposed matches for the given user.
    """

    def __init__(self, uid: str):
        self.uid = uid
        super().__init__(name="userRanker")

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        yield from sorted(
            proposed, key=lambda m: self.uid in m.users, reverse=True
        )


def test_no_rankers():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[],
    )
    proposed = [Match(users={"C", "D"}), Match(users={"A", "B"})]

    ranker = MultiRanker(rankers=[])
    actual = list(ranker.rank(inp, proposed))

    expected = [Match(users={"C", "D"}), Match(users={"A", "B"})]
    assert actual == expected


def test_multiple_rankers():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[],
    )
    proposed = [
        Match(users={"B", "E"}),
        Match(users={"A", "B"}),
        Match(users={"A", "C"}),
        Match(users={"C", "D"}),
    ]
    rankers = [FakeUserRanker(uid="A"), FakeUserRanker(uid="C")]

    ranker = MultiRanker(rankers=rankers)
    actual = list(ranker.rank(inp, proposed))

    # The first ranker prioritizes the matches with A, then the second ranker
    # prioritizes matches with C, resulting in the following ordering:
    expected = [
        Match(users={"A", "C"}),
        Match(users={"C", "D"}),
        Match(users={"A", "B"}),
        Match(users={"B", "E"}),
    ]
    assert actual == expected
