from typing import Iterator

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput

GENERATOR_LIMITED_SCHEDULES = "limitedSchedulesGenerator"


class LimitedSchedulesGenerator(MatchGenerator):
    def __init__(self, max_available: int = 1):
        # Maximum number of available slots in a user's schedule for them to be
        # eligible for a limited availability match.
        self.max_available = max_available
        super().__init__(name=GENERATOR_LIMITED_SCHEDULES)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        # TODO: Implement your generator

        # get limited availability users
        limited_availability = []
        for user in inp.users:  # for users in the list users
            if (
                len(user.schedule) <= self.max_available
            ):  # if the number of the user schedule is less than or equal to the max available which is one
                limited_availability.append(
                    user
                )  # then consider that a user a limited schedule user and add to the list
        inp.logger.info(limited_availability)

        matches = {}
        # compare limited users to all users
        for limited_user in limited_availability:
            for user in inp.users:
                if (
                    limited_user.uid != user.uid
                ):  # check that we are not looking at the current limited_user
                    # compare limited user schedule to schedule of user in all users
                    for l_availability in limited_user.schedule:
                        for availability in user.schedule:
                            if (
                                l_availability == availability
                            ):  # if the availabilities in limited user schedule and other user schedule are the same, then we have a match!
                                if (
                                    limited_user.uid,
                                    user.uid,
                                ) in matches:  # add availability to availability metadata
                                    pass
                                else:
                                    # add first match of this set of users to dictionary
                                    # TODO: add the availability to this first match
                                    matches[
                                        {limited_user.uid, user.uid}
                                    ] = Match(
                                        users={limited_user.uid, user.uid}
                                    )

        inp.logger.info(matches)

        # #creating another list so you wont have to minus one when comparing the two(the limited user wont be in the users list)
        # not_limited_availability = []
        # for u inp.users:
        #     if len(u.schedule) > self.max_available:
        #         not_limited_availability.append(u)
        # inp.logger.info(limited_availability)

        # new_match = [(limit, avail) for limit in limited_availability
        # for avail in not_limited_availability if len(limited_availability.schedule)
        # != len(not_limited_availability.schedule)]
        # inp.logger.info(new_match)

        # for l_availability in limited_availability.schedule:
        # for availability in not_limited_availability.schedule:
        # if len(l_availability.schedule) < len(availability.schedule):

        # if one user has an available sched and one has a limited sched then its a match
        # get the two user ids which have matched
        # append them both to the new match list as a tuple maybe?
        # convert the list into a generator for it to return matches

        # new_match_gen = (y for y in new_match)
        # new_match_iter = iter(new_match)
        # next(new_match_iter)

        yield from []
