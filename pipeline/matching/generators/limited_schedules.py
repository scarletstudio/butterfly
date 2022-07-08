from typing import Iterator

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput

GENERATOR_LIMITED_SCHEDULES = "limitedSchedulesGenerator"


class LimitedSchedulesGenerator(MatchGenerator):
    def __init__(self, max_available: int = 0):
        # Maximum number of available slots in a user's schedule for them to be
        # eligible for a limited availability match.
        self.max_available = max_available
        super().__init__(name=GENERATOR_LIMITED_SCHEDULES)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        # TODO: Implement your generator
        inp.logger.info("Luke Arrington was here!")
        yield from []
