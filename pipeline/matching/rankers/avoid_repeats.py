from typing import Iterator, List

from pipeline.matching.utils import get_user_group, get_user_groups_from_matches
from pipeline.types import Match, MatchingInput


def avoid_repeat_ranker(
    inp: MatchingInput, proposed: List[Match]
) -> Iterator[Match]:
    """Returns proposed matches with non-repeat matches ranked first."""
    repeat_match_queue: List[Match] = []
    recent_groups = get_user_groups_from_matches(inp.recent_matches)
    for match in proposed:
        # Prioritize matches that users have not had recently
        if get_user_group(match) not in recent_groups:
            yield match
    # Return all other proposed matches
    yield from repeat_match_queue
