from typing import List

from pipeline.types import Match, MatchingInput, User


class MatchFinalizer:
    def __init__(self, name: str):
        self.name = name

    def finalize(self, inp: MatchingInput, users: List[User]) -> List[Match]:
        raise NotImplementedError()
