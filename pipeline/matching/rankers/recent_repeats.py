from typing import Iterator, List

from pipeline.matching.core import MatchRanker
from pipeline.matching.utils import get_user_group, get_user_groups_from_matches
from pipeline.types import Match, MatchingInput, MatchRankFunction

RANKER_RECENT_REPEATS = "recentRepeatsRanker"


class RecentRepeatsRanker(MatchRanker):
    def __init__(self, include_repeats: bool = True):
        self.include_repeats = include_repeats
        super().__init__(name=RANKER_RECENT_REPEATS)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:
        """
        Returns proposed matches with matches that do not repeat recent user groupings ranked first.
        Can be configured to either exclude recent repeats or include them but ranked at the end (default).
        """
        repeat_match_queue: List[Match] = []
        recent_groups = get_user_groups_from_matches(inp.recent_matches)
        for match in proposed:
            # Prioritize matches that users have not had recently
            if get_user_group(match) not in recent_groups:
                yield match
            elif self.include_repeats:
                repeat_match_queue.append(match)
        # Return all other proposed matches
        yield from repeat_match_queue
