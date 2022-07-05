from typing import Iterator

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput

RANKER_QUANTITY = "quantityRanker"


def get_number_matches(matches):
    num_matches = {}
    for match in matches:
        for user in match.users:
            if num_matches[user] is None:
                num_matches[user] = 1
            else:
                num_matches[user] += 1
    return num_matches


class QuantityRanker(MatchRanker):
    def __init__(self):
        super().__init__(name=RANKER_QUANTITY)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        num_matches = get_number_matches(proposed)
        yield from sorted(
            proposed,
            key=lambda match: sum([num_matches[user] for user in match.users]),
            reverse=True,
        )
