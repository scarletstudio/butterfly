from typing import Iterator

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput

GENERATOR_SIMILAR_INTENTS = "similarIntentsGenerator"


class SimilarIntentsGenerator(MatchGenerator):
    def __init__(self, min_common: int = 0):
        # Minimum number of compatible intents users must have in common to be
        # eligible for a similar intents match.
        self.min_common = min_common
        super().__init__(name=GENERATOR_SIMILAR_INTENTS)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        # TODO: Implement your generator
        yield from []
