from typing import Iterator

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput

RANKER_DEFAULT = "defaultRanker"


class DefaultRanker(MatchRanker):
    def __init__(self):
        super().__init__(name=RANKER_DEFAULT)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        """Returns proposed matches with no changes to ranking."""
        yield from proposed
