from typing import Iterator, List

from pipeline.types import Match, MatchingInput


def rank_pass(inp: MatchingInput, proposed: List[Match]) -> Iterator[Match]:
    """Returns proposed matches with no changes to ranking."""
    yield from proposed
