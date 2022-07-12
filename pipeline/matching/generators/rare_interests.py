# used to count occurences in a list
import itertools as it
from collections import Counter
from typing import Iterator

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput, MatchMetadata

GENERATOR_RARE_INTERESTS = "rareInterestsGenerator"


class RareInterestsGenerator(MatchGenerator):
    def __init__(self, max_frequency: float = 0):
        # Maximum fraction of all users in input who can have this interest for
        # it be considered a rare interest.
        self.max_frequency = max_frequency
        super().__init__(name=GENERATOR_RARE_INTERESTS)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        # check for null inputs
        m = []
        if inp.interests == None or inp.users == None:
            m = [
                Match(
                    users=set("-1"),
                    metadata=MatchMetadata(
                        generator="rareInterestsGenerator",
                        score=0,
                        rareInterests=["NULL inputs"],
                    ),
                )
            ]
            yield from m

        usrList = inp.users
        interestsList = inp.interests

        # count the # interests and filter for 2 or more occurences
        tmpIntrestLst = []
        sum_ = 0

        for user in usrList:
            tmpIntrestLst += [x.name for x in user.interests]

        countDict = Counter(tmpIntrestLst)
        trueCountDict = dict()
        for interest, count in countDict.items():
            if count > 1:
                trueCountDict[interest] = count
                sum_ += count

        # find percentage of users who have each interest
        rarityScoreDict = {}
        for interest, value in trueCountDict.items():
            rarityScoreDict[interest] = value / sum_

        # comparing the intrests of every possible pair of users
        matches = list(it.combinations(usrList, 2))
        rarestInterest = " "
        rarityScore = 0.0
        matchNames = set("None")
        for userMatch in matches:
            commonInterestList = list(
                set([x.name for x in userMatch[0].interests])
                & set([x.name for x in userMatch[1].interests])
            )

            for commonInterest in commonInterestList:
                # rarestInterest = min(rarityScoreDict, key=rarityScoreDict.get)
                rarestInterest = min(
                    rarityScoreDict.items(), key=lambda x: x[1]
                )[0]
                if rarestInterest in commonInterestList:
                    matchNames = {userMatch[0].uid, userMatch[1].uid}
                rarityScore = float(rarityScoreDict[rarestInterest])

        m = [
            Match(
                users=matchNames,
                metadata=MatchMetadata(
                    generator="rareInterestsGenerator",
                    score=rarityScore,
                    rareInterests=[rarestInterest],
                ),
            )
        ]
        yield from m
