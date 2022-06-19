from typing import Iterator

from pipeline.matching.core import MatchRanker
from pipeline.matching.generators import GENERATOR_COMMON_LETTERS
from pipeline.types import Match, MatchingInput

RANKER_COMMON_LETTERS = "commonLettersRanker"


def get_common_letters(match: Match):
    if match.metadata.generator != GENERATOR_COMMON_LETTERS:
        return -1
    return len(match.metadata.commonLetters)


class CommonLettersRanker(MatchRanker):
    def __init__(self):
        super().__init__(name=RANKER_COMMON_LETTERS)

    def rank(
        self, inp: MatchingInput, matches: Iterator[Match]
    ) -> Iterator[Match]:
        """
        Ranks matches by giving priority to matches from the common letter
        generator with the most number of unique letters in common, all other
        generated matches are given lower priority.
        """
        yield from sorted(matches, key=get_common_letters, reverse=True)
