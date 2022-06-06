from typing import Iterator

from pipeline.matching.generators.common_letters import GENERATOR_COMMON_LETTERS
from pipeline.types import Match, MatchingInput


def get_common_letters(match: Match):
    if match.metadata.generator != GENERATOR_COMMON_LETTERS:
        return -1
    return len(match.metadata.commonLetters)


def rank_common_letters(
    inp: MatchingInput, proposed: Iterator[Match]
) -> Iterator[Match]:
    """
    Ranks matches by giving priority to matches from the common letter
    generator with the most number of unique letters in common, all other
    generated matches are given lower priority.
    """
    yield from sorted(proposed, key=get_common_letters, reverse=True)
