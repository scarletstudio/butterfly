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
        flag = False
        pLst = []
        lst = []

        prev = next(proposed)
        cod = prev.metadata.matchingIntents[0].code
        seek = prev.metadata.matchingIntents[0].seeker
        give = prev.metadata.matchingIntents[0].giver
        ups = inp.intent_upvotes

        while prev:
            for i in ups:
                if i.to_user == give:
                    flag = True
                    pLst.append(prev)
                    prev = next(proposed)
                    break

            if flag == False:
                lst.append(prev)
                prev = next(proposed)

            flag = False

        pLst += lst

        for l in pLst:
            yield l

        # inp.logger.info("Verica Karanakokva was here!")
        # yield from proposed
