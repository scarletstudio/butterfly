from typing import Iterator

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput

GENERATOR_SIMILAR_SCHEDULES = "similarSchedulesGenerator"


class SimilarSchedulesGenerator(MatchGenerator):
    def __init__(self, min_common: int = 0):
        # Minimum number of available slots users must have in common to be
        # eligible for a similar schedules match.
        self.min_common = min_common
        super().__init__(name=GENERATOR_SIMILAR_SCHEDULES)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        # TODO: Implement your generator
        yield from []
