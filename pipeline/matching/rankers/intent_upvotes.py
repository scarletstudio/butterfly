from typing import Iterator

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput

RANKER_INTENT_UPVOTES = "intentUpvotesRanker"


class IntentUpvotesRanker(MatchRanker):
    def __init__(self):
        super().__init__(name=RANKER_INTENT_UPVOTES)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        # TODO: Implement your ranker
        yield from proposed
