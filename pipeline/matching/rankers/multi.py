from typing import Iterator, List

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput

RANKER_MULTI = "multiRanker"


class MultiRanker(MatchRanker):
    def __init__(self, rankers: List[MatchRanker]):
        self.rankers = rankers
        super().__init__(name=RANKER_MULTI)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        ordering = proposed
        for ranker in self.rankers:
            ordering = ranker.rank(inp, ordering)
        return ordering
