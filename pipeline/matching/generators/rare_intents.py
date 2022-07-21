from collections import defaultdict
from typing import DefaultDict, Dict, Iterator, List

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

        for user in inp.users:
            for intent in user.intents:
                if intent.side == Side.GIVING:
                    codeFrequencyDict[intent.code] += 1

        return codeFrequencyDict

    # returns a dictionary of giving name as key and how rare it is compared to the community as value
    def percentage(self, inp: MatchingInput) -> dict:
        totalUsers = 0
        totalUsers = len(inp.users)
        percentDict: DefaultDict[str, float] = self.rareness(inp)
        for perecnt in percentDict:
            percentDict[perecnt] /= totalUsers

        return percentDict

    def generate(self, inp: MatchingInput) -> Iterator[Match]:

        # getting a percentage of rareness for every given
        percentDict = self.percentage(inp)
        # add all rare givers to this dictionary to later match them
        # key is giving name and value is list of users
        rareDict = {}

        # check if giving side is rare by comparing it to the community threshold
        for perecnt in percentDict:
            if percentDict[perecnt] < self.max_frequency:
                rareDict[perecnt] = percentDict.get(perecnt)

        match: List[Match] = []

        # key is giving name and value is list of users
        rareUsers = defaultdict(list)

        for user in inp.users:
            for intent in user.intents:
                if intent.code in rareDict and (intent.side == Side.GIVING):
                    rareUsers[intent.code].append(user)

        # holds matches made
        matches: Dict[str, Match] = {}
        # append matches to a dictionary
        # before doing so sort the id and place it as the key so it could be cleaned out

        # check if rare giving has a seeker, then make match
        for intent_code, giver_user_list in rareUsers.items():
            for users_in_community in inp.users:
                for intents_in_community in users_in_community.intents:
                    if intents_in_community.code == intent_code and (
                        intents_in_community.side == Side.SEEKING
                    ):
                        for giver_user in giver_user_list:
                            rare_match = Match(
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
                            user_one_in_match = users_in_community.uid
                            user_two_in_match = giver_user.uid

                            checking_same_user = False

                            if int(user_one_in_match) > int(user_two_in_match):
                                key = (
                                    user_two_in_match + "_" + user_one_in_match
                                )
                            elif int(user_one_in_match) == int(
                                user_two_in_match
                            ):
                                checking_same_user = True
                            else:
                                key = (
                                    user_one_in_match + "_" + user_two_in_match
                                )

                            if (
                                checking_same_user == False
                            ):  # this is to make sure that we are not making a match between one user
                                if key in matches:
                                    matches[key].metadata.rareIntents.append(
                                        IntentMatch(
                                            code=intents_in_community.code,
                                            seeker=users_in_community.uid,
                                            giver=giver_user.uid,
                                        )
                                    )

                                else:
                                    matches[key] = rare_match

        yield from matches.values()

        # Alternate solution to removing duplicates

        # # holds matches made
        # matches = []
        # #append matches to a dictionary
        # #before doing so sort the id and place it as the key so it could be cleaned out

        # # check if rare giving has a seeker, then make match
        # for intent_code, giver_user_list in rareUsers.items():
        #     for users_in_community in inp.users:
        #         for intents_in_community in users_in_community.intents:
        #             if intents_in_community.code == intent_code and (
        #                 intents_in_community.side == Side.SEEKING
        #             ):
        #                 for giver_user in giver_user_list:
        #                     m = Match(
        #                         users={
        #                             users_in_community.uid,
        #                             giver_user.uid,
        #                         },
        #                         metadata=MatchMetadata(
        #                             generator="rareIntentsGenerator",
        #                             rareIntents=[
        #                                 IntentMatch(
        #                                     code=intents_in_community.code,
        #                                     seeker=users_in_community.uid,
        #                                     giver=giver_user.uid,
        #                                 )
        #                             ],
        #                         ),
        #                     )
        #                     matches.append(m)
        #                 # else:
        #                 #     m = Match(
        #                 #         users={
        #                 #             users_in_community.uid,
        #                 #             value.uid,
        #                 #         },
        #                 #         metadata=MatchMetadata(
        #                 #             generator="rareIntentsGenerator",
        #                 #             rareIntents=[
        #                 #                 IntentMatch(
        #                 #                     code=intents_in_community.code,
        #                 #                     seeker=users_in_community.uid,
        #                 #                     giver=value.uid,
        #                 #                 )
        #                 #             ],
        #                 #         ),
        #                 #     )
        #                 #     matches.append(m)

        # # getting rid of duplicates
        # matchesNoDuplicates = []

        # for i in matches:
        #     user_A_uid = list(i.users)[0]
        #     user_B_uid = list(i.users)[1]

        #     for (j) in matches:  # checking if users share the same id, then remove it
        #         user_C_uid = list(j.users)[0]
        #         user_D_uid = list(j.users)[1]

        #         if i.users.union(j.users) == i.users:#(user_A_uid == user_C_uid and user_B_uid == user_D_uid) or (user_A_uid == user_D_uid and user_B_uid == user_C_uid):
        #             if i not in matchesNoDuplicates:
        #                 matchesNoDuplicates.append(i)
        #                 matches.remove(j)
        #         else:
        #             if i not in matchesNoDuplicates:
        #                 matchesNoDuplicates.append(i)

        # yield from matchesNoDuplicates
