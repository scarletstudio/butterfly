from typing import Iterator, List

from pipeline.matching.generators.satirical import (
    GENERATOR_COMMON_LETTERS,
    METADATA_FIELD_COMMON_LETTERS,
)
from pipeline.types import Match, MatchingInput


def get_common_letters(match: Match):
    if match.metadata.get("generator", "") != GENERATOR_COMMON_LETTERS:
        return -1
    metadata_fields = match.metadata.get(GENERATOR_COMMON_LETTERS, {})
    common_letters = metadata_fields.get(METADATA_FIELD_COMMON_LETTERS, {})
    return len(common_letters)


def common_letter_ranker(
    inp: MatchingInput, proposed: List[Match]
) -> Iterator[Match]:
    """
    Ranks matches by giving priority to matches from the common letter
    generator with the most number of unique letters in common, all other
    generated matches are given lower priority.
    """
    yield from sorted(proposed, key=get_common_letters, reverse=True)
