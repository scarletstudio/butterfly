from typing import Iterator

from pipeline.matching.core import MatchRanker
from pipeline.types import (
    IntentMatch,
    IntentUpvote,
    Match,
    MatchingInput,
    MatchMetadata,
    Side,
)

RANKER_INTENT_UPVOTES = "intentUpvotesRanker"


class IntentUpvotesRanker(MatchRanker):
    def __init__(self):
        super().__init__(name=RANKER_INTENT_UPVOTES)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        # TODO: Implement your ranker
        flag = False
        upvotedLst = []
        lst = []

        currMatch = next(proposed)
        ups = inp.intent_upvotes
        failMatch = Match(
            users={"fail", "fail"},
            metadata=MatchMetadata(
                generator="fail",
                matchingIntents=[
                    IntentMatch(code="failing", seeker="fail", giver="fail")
                ],
            ),
        )

        while currMatch != failMatch:
            for i in ups:
                if i.to_user == currMatch.metadata.matchingIntents[0].giver:
                    flag = True
                    upvotedLst.append(currMatch)
                    try:
                        currMatch = next(proposed)
                    except:
                        currMatch = failMatch
                    break

            if flag == False:
                lst.append(currMatch)
                try:
                    currMatch = next(proposed)
                except:
                    currMatch = failMatch

            flag = False

        upvotedLst += lst

        for l in upvotedLst:
            yield l

        # inp.logger.info("Verica Karanakokva was here!")
        # yield from proposed
