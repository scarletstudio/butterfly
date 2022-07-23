from typing import Dict, Iterator, List, Tuple

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput, MatchMetadata

GENERATOR_LIMITED_SCHEDULES = "limitedSchedulesGenerator"


class LimitedSchedulesGenerator(MatchGenerator):
    def __init__(self, max_available: int = 1):
        # Maximum number of available slots in a user's schedule for them to be
        # eligible for a limited availability match.
        self.max_available = max_available
        super().__init__(name=GENERATOR_LIMITED_SCHEDULES)

    def create_matches(self, users_availability: Dict) -> List[Match]:
        matched_users = []
        for userid_tuple, avail in users_availability.items():
            metadata = MatchMetadata(
                generator=GENERATOR_LIMITED_SCHEDULES, availability=avail
            )
            users = set(userid_tuple)
            match = Match(users=users, metadata=metadata)
            matched_users.append(match)
        return matched_users

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        # get limited availability users
        limited_availability = []
        for user in inp.users:
            if len(user.schedule) <= self.max_available:
                limited_availability.append(user)

        users_availability: Dict[Tuple, List] = {}
        # compare limited users to all users
        for limited_user in limited_availability:
            for user in inp.users:
                userid_tuple = (limited_user.uid, user.uid)
                common_avail = []

                if limited_user.uid == user.uid:
                    continue

                for l_avail in limited_user.schedule:
                    for avail in user.schedule:
                        # if the availabilities in limited user schedule and
                        # other user schedule are the same, then we have a match
                        if l_avail == avail:
                            common_avail.append(avail)

                if len(common_avail) >= 1:
                    users_availability[userid_tuple] = common_avail

        matches = self.create_matches(users_availability)

        yield from matches
