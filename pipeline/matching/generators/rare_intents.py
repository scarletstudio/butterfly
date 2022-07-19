from typing import Iterator

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput

GENERATOR_RARE_INTENTS = "rareIntentsGenerator"


class RareIntentsGenerator(MatchGenerator):
    def __init__(self, max_frequency: float = 0):
        # Maximum fraction of all users in input who can have this intent for
        # it be considered a rare intent.
        self.max_frequency = max_frequency
        super().__init__(name=GENERATOR_RARE_INTENTS)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        # TODO: Implement your generator
        inp.logger.info("Neveen was here!")
        yield from []
