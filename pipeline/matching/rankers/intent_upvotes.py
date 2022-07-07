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
        prev = next(proposed)
        seek = prev.metadata.matchingIntents[0].seeker
        cod = prev.metadata.matchingIntents[0].code
        give = prev.metadata.matchingIntents[0].giver
        for i in proposed:
            nex = next(proposed)
            # if nex.metadata.matchingIntents[0].seeker == seek and nex.metadata.matchingIntents[0].code == cod:

        # inp.logger.info("Verica Karanakokva was here!")
        yield from proposed
