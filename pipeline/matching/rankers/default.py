from typing import Iterator

from pipeline.types import Match, MatchingInput


def rank_pass(inp: MatchingInput, proposed: Iterator[Match]) -> Iterator[Match]:
    """Returns proposed matches with no changes to ranking."""
    yield from proposed
