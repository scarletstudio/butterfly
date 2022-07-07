from typing import Iterator

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput

RANKER_QUANTITY = "quantityRanker"


def get_number_matches(matches):
    num_matches = {}
    for match in matches:
        for user in match.users:
            if num_matches.get(user) is None:
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
        """The function 'rank' returns a sorted iterator based on the total number of matches for each user.
        The less matches a user has the higher they are prioritized."""
        num_matches = get_number_matches(proposed)
        yield from sorted(
            proposed,
            key=lambda match: sum(
                [num_matches.get(user) for user in match.users]
            ),
        )
