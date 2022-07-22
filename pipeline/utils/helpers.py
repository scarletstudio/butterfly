from typing import List, Optional

from pipeline.types import Match


def find_match_of_3(matches: List[Match]) -> Optional[Match]:
    for match in matches:
        if len(match.users) == 3:
            return match
    return None
