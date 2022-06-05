from typing import Iterator, List

from pipeline.matching.utils import get_user_group, get_user_groups_from_matches
from pipeline.types import Match, MatchingInput, MatchRanker


def configure_rank_recent_repeats(include_repeats=True) -> MatchRanker:
    def rank(inp: MatchingInput, proposed: List[Match]) -> Iterator[Match]:
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
            elif include_repeats:
                repeat_match_queue.append(match)
        # Return all other proposed matches
        yield from repeat_match_queue

    return rank


def get_rank_avoid_recent_repeats() -> MatchRanker:
    return configure_rank_recent_repeats(include_repeats=True)


def get_rank_exclude_recent_repeats() -> MatchRanker:
    return configure_rank_recent_repeats(include_repeats=False)
