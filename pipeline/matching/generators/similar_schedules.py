from typing import Dict, Iterator, Tuple

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput, MatchMetadata, UserId

GENERATOR_SIMILAR_SCHEDULES = "similarSchedulesGenerator"


class SimilarSchedulesGenerator(MatchGenerator):
    def __init__(self, min_common: int = 0):
        # Minimum number of available slots users must have in common to be
        # eligible for a similar schedules match.
        self.min_common = min_common
        super().__init__(name=GENERATOR_SIMILAR_SCHEDULES)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        potential_matches: Dict[Tuple[UserId, UserId], Match] = {}

        user_1_i = 0
        user_2_i = 1

        while user_2_i < len(inp.users):
            user_1 = inp.users[user_1_i]
            user_2 = inp.users[user_2_i]
            for availability1 in user_1.schedule:
                for availability2 in user_2.schedule:
                    if availability1 == availability2:
                        # if we have already saved this match, update the metadata
                        user_pair = (user_1.uid, user_2.uid)
                        if user_pair in potential_matches:
                            match = potential_matches[user_pair]

                            match.metadata.availability.append(
                                availability1
                            )
                            potential_matches[user_pair] = match  # updated
                        # if this is a new match, create match class
                        else:
                            potential_matches[user_pair] = Match(
                                users=set(user_pair),
                                metadata=MatchMetadata(
                                    generator="similarSchedulesGenerator",
                                    availability=[availability1],

                                ),
                            )
            # loop over all the users and their matching availabilities.
            if user_2_i == len(inp.users):
                user_1_i += 1
                user_2_i = user_1_i + 1
            else:
                user_2_i += 1

        # get k,v in list and use value as match (look up iterating over python dictionaries)
        matches = []
        for match in potential_matches.values():
            if len(match.metadata.availability) >= self.min_common:
                matches.append(match)
            print(match.metadata.availability)

        yield from matches
