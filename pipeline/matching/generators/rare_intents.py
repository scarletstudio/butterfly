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
        rareGivingIntentUserMap = defaultdict(list)
        rareSeekingIntentUserMap = defaultdict(list)

        for user in inp.users:
            for intent in user.intents:
                if intent.code in rareDict and (intent.side == Side.SEEKING):
                    rareSeekingIntentUserMap[intent.code].append(user)

                if intent.code in rareDict and (intent.side == Side.GIVING):
                    rareGivingIntentUserMap[intent.code].append(user)

        # for user in inp.users:
        #     for intent in user.intents:
        #         if intent.code in rareSeekingIntentUserMap and (intent.side == Side.SEEKING):
        #             rareSeekingIntentUserMap[intent.code].append(user)

        # holds matches made
        matches: Dict[str, Match] = {}
        # append matches to a dictionary
        # before doing so sort the id and place it as the key so it could be cleaned out

        # rareSeekingIntentUserMap --> intent, user list

        # comparing
        for (
            intent_code,
            giver_user_list,
        ) in (
            rareGivingIntentUserMap.items()
        ):  # I think something is failing here line 89/90
            seeked_user_list = rareSeekingIntentUserMap[
                intent_code
            ]  # maybe not appending properly but I can't seem to find the issue

            for seeker_user in seeked_user_list:

                for giver_user in giver_user_list:
                    rare_match = Match(
                        users={
                            seeker_user.uid,
                            giver_user.uid,
                        },
                        metadata=MatchMetadata(
                            generator="rareIntentsGenerator",
                            rareIntents=[
                                IntentMatch(
                                    code=intent_code,
                                    seeker=seeker_user.uid,
                                    giver=giver_user.uid,
                                )
                            ],
                        ),
                    )
                    user_one_in_match = seeker_user.uid
                    user_two_in_match = giver_user.uid

                    checking_same_user = False

                    if int(user_one_in_match) > int(user_two_in_match):
                        key = user_two_in_match + "_" + user_one_in_match
                    elif int(user_one_in_match) == int(user_two_in_match):
                        checking_same_user = True
                    else:
                        key = user_one_in_match + "_" + user_two_in_match

                    if (
                        checking_same_user == False
                    ):  # this is to make sure that we are not making a match between one user
                        if key in matches:
                            matches[key].metadata.rareIntents.append(
                                IntentMatch(
                                    code=intent_code,
                                    seeker=seeker_user.uid,
                                    giver=giver_user.uid,
                                )
                            )

                        else:
                            matches[key] = rare_match

        yield from matches.values()