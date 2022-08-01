import itertools
from typing import Iterator

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput, MatchMetadata

GENERATOR_SIMILAR_INTERESTS = "similarInterestsGenerator"


class SimilarInterestsGenerator(MatchGenerator):
    def __init__(self, min_common: int = 1):
        self.min_common = min_common
        super().__init__(name=GENERATOR_SIMILAR_INTERESTS)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        listUsers = inp.users
        if listUsers == []:
            return iter([])
        for user_one, user_two in itertools.combinations(listUsers, r=2):
            firstInt = user_one.interests
            secondInt = user_two.interests
            list_of_interest_user_one = [
                indivInterest.code for indivInterest in firstInt
            ]
            list_of_interest_user_two = [
                indivInterest.code for indivInterest in secondInt
            ]
            interest_one = set(list_of_interest_user_one)
            interest_two = set(list_of_interest_user_two)
            unique_interest = (interest_one).union(interest_two)
            common_interest = (interest_one).intersection(interest_two)
            calculate_score = (
                (len(common_interest) / len(unique_interest))
                if (len(unique_interest)) != 0
                else 0.0
            )
            if len(common_interest) < self.min_common:
                continue
            metadata = MatchMetadata(
                generator=GENERATOR_SIMILAR_INTERESTS,
                score=calculate_score,
                interests=list(sorted(common_interest)),
            )
            yield Match(users={user_one.uid, user_two.uid}, metadata=metadata)
