# imported itertools
# combinations - calculate the combination of given data
import itertools
from typing import Iterator

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput, MatchMetadata

GENERATOR_SIMILAR_INTERESTS = "similarInterestsGenerator"

# takes in a string and returns a string
# argument name is the type of str and the return type str(setthing)


class SimilarInterestsGenerator(MatchGenerator):
    def __init__(self, min_common: int = 0):
        # Minimum number of interests users must have in common to be eligible
        # for a similar interests match.
        self.min_common = min_common
        super().__init__(name=GENERATOR_SIMILAR_INTERESTS)

    # the method of the node object that will return the generator
    def generate(
        self, inp: MatchingInput
    ) -> Iterator[Match]:  # returns iterator with matches
        #    com_sequence = itertools.combinations(inp.users, r=2)  # MatchingInput object - attribute Interest
        for user_one, user_two in itertools.combinations(inp.users, r=2):
            # union - consists of all the elements in interest of user one and user two without any repeats
            # could use update but 'list' object has no attribute 'update'
            list_of_interest_user_one = [
                interests.name.lower() for interests in user_one.interests
            ]  # list of interest of user one as a string
            list_of_interest_user_two = [
                interests.name.lower() for interests in user_two.interests
            ]  # list of interest of user two as a string
            interest_one = set(list_of_interest_user_one)
            interest_two = set(list_of_interest_user_two)
            unique_interest = (interest_one).union(interest_two)  # all unique
            common_interest = (interest_one).intersection(
                interest_two
            )  # to get common interest
            # non zero division
            calculate_score = 0.0
            if len(unique_interest) != 0.0 and len(common_interest) != 0.0:
                calculate_score = (len(common_interest)) / (
                    len(unique_interest)
                )
            if len(common_interest) < self.min_common:
                # score = Fraction(len(common_interest)/len(unique_interest)) #score #had to make sure that their minimum in common had to be more than 0
                continue
            metadata = MatchMetadata(
                generator=GENERATOR_SIMILAR_INTERESTS,
                score=calculate_score,
                commonInterests=list(sorted(common_interest)),
            )
            yield Match(
                users={user_one.uid, user_two.uid}, metadata=metadata
            )  # give back a match object #yield from generator


# inp.users --> includes the user interest
