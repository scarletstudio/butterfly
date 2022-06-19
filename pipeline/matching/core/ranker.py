from typing import Iterator

from pipeline.types import Match, MatchingInput


class MatchRanker:
    def __init__(self, name: str):
        self.name = name

    def rank(
        self, inp: MatchingInput, matches: Iterator[Match]
    ) -> Iterator[Match]:
        raise NotImplementedError()
