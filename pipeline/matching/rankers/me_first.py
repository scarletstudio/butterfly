from typing import Iterator

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput

RANKER_ME_FIRST = "meFirstRanker"


class MeFirstRanker(MatchRanker):
    def __init__(self, my_uid: str):
        self.my_uid = my_uid
        super().__init__(name=RANKER_ME_FIRST)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        """Returns proposed matches with matches including me ranked first."""
        yield from sorted(
            proposed, key=lambda m: self.my_uid in m.users, reverse=True
        )
