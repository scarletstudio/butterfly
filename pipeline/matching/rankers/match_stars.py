from typing import Iterator

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput

RANKER_MATCH_STARS = "matchStarsRanker"


class MatchStarsRanker(MatchRanker):
    def __init__(self):
        super().__init__(name=RANKER_MATCH_STARS)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        # TODO: Implement your ranker
        yield from proposed
