from typing import Iterator

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput

GENERATOR_RARE_INTERESTS = "rareInterestsGenerator"


class RareInterestsGenerator(MatchGenerator):
    def __init__(self, max_frequency: float = 0):
        # Maximum fraction of all users in input who can have this interest for
        # it be considered a rare interest.
        self.max_frequency = max_frequency
        super().__init__(name=GENERATOR_RARE_INTERESTS)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        # TODO: Implement your generator
        yield from []
