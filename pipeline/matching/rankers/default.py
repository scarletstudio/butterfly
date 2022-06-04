from typing import Iterator, List

from pipeline.types import Match, MatchingInput


def no_ranker(inp: MatchingInput, proposed: List[Match]) -> Iterator[Match]:
    """Returns proposed matches with no changes to ranking."""
    yield from proposed
