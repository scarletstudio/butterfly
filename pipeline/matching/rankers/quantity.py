from collections import defaultdict
from typing import Iterator

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput

RANKER_QUANTITY = "quantityRanker"


def get_number_matches(matches):
    def def_val():
        return 0

    num_matches = defaultdict(def_val)
    for match in matches:
        for user in match.users:
            num_matches[user.uid] += 1
    return num_matches


class QuantityRanker(MatchRanker):
    def __init__(self):
        super().__init__(name=RANKER_QUANTITY)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        """The function 'rank' returns a sorted iterator based on the total number of matches for each user.
        The less matches a user has the higher they are prioritized."""
        proposed_list = list(proposed)
        num_matches = get_number_matches(proposed_list)
        yield from sorted(
            proposed_list,
            key=lambda match: (
                float(sum([num_matches.get(user) for user in match.users]))
            )
            / len(match.users),
        )
