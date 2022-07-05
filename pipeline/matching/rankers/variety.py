from typing import Iterator

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput

RANKER_VARIETY = "varietyRanker"


def dup_gencheck(recentMatches, match):
    for recent in recentMatches:
        if match.metadata.generator == recent.metadata.generator:
            if match.users.intersection(recent.users):
                return True
    return False


class VarietyRanker(MatchRanker):
    def __init__(self):
        super().__init__(name=RANKER_VARIETY)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        # TODO: Implement your ranker
        inp.logger.info("David was here!")
        yield from sorted(
            proposed, key=lambda match: dup_gencheck(inp.recent_matches, match)
        )
