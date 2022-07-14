from typing import Iterator, List

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput

RANKER_VARIETY = "varietyRanker"


def dup_gencheck(recentMatches: List[Match], match: Match) -> bool:
    for recent in recentMatches:  # iterate list of Match's
        if (
            match.metadata.generator == recent.metadata.generator
        ):  # check if the same generators are used
            if match.users.intersection(
                recent.users
            ):  # check if any of the users in a match pair reappears in a recent match
                return True  # YES, there is a duplicate
    return False  # NO duplicates


class VarietyRanker(MatchRanker):
    def __init__(self):
        super().__init__(name=RANKER_VARIETY)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        inp.logger.info("David was here!")
        proposed_list = list(proposed)
        yield from sorted(
            proposed_list,
            key=lambda match: dup_gencheck(inp.recent_matches, match),
        )
