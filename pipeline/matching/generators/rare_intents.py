from collections import defaultdict
from typing import DefaultDict, Iterator, List

from pipeline.matching.core import MatchGenerator
from pipeline.types import (
    IntentMatch,
    Match,
    MatchingInput,
    MatchMetadata,
    Side,
)

GENERATOR_RARE_INTENTS = "rareIntentsGenerator"


class RareIntentsGenerator(MatchGenerator):
    def __init__(self, max_frequency: float = 0):
        self.max_frequency = max_frequency
        super().__init__(name=GENERATOR_RARE_INTENTS)

    # returns a dictionary of Giving name as the key and the frequncy as the value
    def rareness(self, inp: MatchingInput) -> DefaultDict[str, float]:
        codeFrequencyDict: DefaultDict[str, float] = defaultdict(float)

        for x in inp.users:
            for y in x.intents:
                if y.side == Side.GIVING:
                    codeFrequencyDict[y.code] += 1

        return codeFrequencyDict

    # returns a dictionary of giving name as key and how rare it is compared to the community as value
    def percentage(self, inp: MatchingInput) -> dict:
        totalUsers = 0
        totalUsers = len(inp.users)
        percentDict: DefaultDict[str, float] = self.rareness(inp)
        for key in percentDict:
            percentDict[key] /= totalUsers

        return percentDict

    def generate(self, inp: MatchingInput) -> Iterator[Match]:

        # getting a percentage of rareness for every given
        percentDict = self.percentage(inp)
        # add all rare givers to this dictionary to later match them
        # key is giving name and value is list of users
        rareDict = {}

        # check if giving side is rare by comparing it to the community threshold
        for key in percentDict:
            if percentDict[key] < self.max_frequency:
                rareDict[key] = percentDict.get(key)

        match: List[Match] = []

        # key is giving name and value is list of users
        rareUsers = defaultdict(list)

        for y in inp.users:
            for z in y.intents:
                if z.code in rareDict and (z.side == Side.GIVING):
                    rareUsers[z.code].append(y)

        # holds matches made
        matches = []

        # check if rare giving has a seeker, then make match
        for intent_code, giver_user_list in rareUsers.items():
            for users_in_community in inp.users:
                for intents_in_community in users_in_community.intents:
                    if intents_in_community.code == intent_code and (
                        intents_in_community.side == Side.SEEKING
                    ):
                        for giver_user in giver_user_list:
                            m = Match(
                                users={
                                    users_in_community.uid,
                                    giver_user.uid,
                                },
                                metadata=MatchMetadata(
                                    generator="rareIntentsGenerator",
                                    rareIntents=[
                                        IntentMatch(
                                            code=intents_in_community.code,
                                            seeker=users_in_community.uid,
                                            giver=giver_user.uid,
                                        )
                                    ],
                                ),
                            )
                            matches.append(m)
                        # else:
                        #     m = Match(
                        #         users={
                        #             users_in_community.uid,
                        #             value.uid,
                        #         },
                        #         metadata=MatchMetadata(
                        #             generator="rareIntentsGenerator",
                        #             rareIntents=[
                        #                 IntentMatch(
                        #                     code=intents_in_community.code,
                        #                     seeker=users_in_community.uid,
                        #                     giver=value.uid,
                        #                 )
                        #             ],
                        #         ),
                        #     )
                        #     matches.append(m)

        # getting rid of duplicates
        matchesNoDuplicates = []
        for i in matches:
            for (
                j
            ) in matches:  # checking if users share the same id, then remove it
                i_users_A = list(i.users)
                iA = i_users_A[0]

                i_users_B = list(i.users)
                iB = i_users_B[1]

                j_users_A = list(j.users)
                jA = j_users_A[0]

                j_users_B = list(j.users)
                jB = j_users_B[1]

                if (iA == jA and iB == jB) or (iA == jB and iB == jA):
                    if i not in matchesNoDuplicates:
                        matchesNoDuplicates.append(i)
                        matches.remove(j)
                else:
                    if i not in matchesNoDuplicates:
                        matchesNoDuplicates.append(i)

        yield from matchesNoDuplicates
