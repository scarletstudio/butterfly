from typing import Iterator

from pipeline.types import Match, MatchingInput


class MatchGenerator:
    def __init__(self, name: str):
        self.name = name

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        raise NotImplementedError()
