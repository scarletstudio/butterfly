from typing import Dict, Iterator, List, Tuple

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
        # rank halping variables
        flag = False
        idx = 0
        upvotedDict: Dict[Tuple[int, str], int] = {}
        upvotedLst: List[Match] = []
        lst: List[Match] = []

        # match specific variables
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
            currMatchGiver = currMatch.metadata.matchingIntents[0].giver

            if currMatch.metadata.matchingIntents != []:
                currMatchIntent = currMatch.metadata.matchingIntents[0].code
                for i in ups:
                    if (
                        i.to_user == currMatchGiver
                        and i.intent == currMatchIntent
                    ):
                        flag = True
                        if upvotedLst.__contains__(currMatch):
                            upvotedDict[
                                (upvotedLst.index(currMatch), currMatchIntent)
                            ] += i.value
                        else:
                            upvotedLst.append(currMatch)
                            upvotedDict[
                                (len(upvotedLst) - 1, currMatchIntent)
                            ] = i.value

                if flag == False:
                    lst.append(currMatch)
            else:
                lst.append(currMatch)

            try:
                currMatch = next(proposed)
            except:
                currMatch = failMatch

        flag = False

        while upvotedDict != {}:
            maxKey = max(upvotedDict, key=lambda k: upvotedDict[k])
            lst.insert(idx, upvotedLst[maxKey[0]])
            idx += 1
            del upvotedDict[maxKey]

        for l in lst:
            yield l
