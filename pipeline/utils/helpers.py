from typing import List, Optional

from pipeline.types import Match


# iterates through list of matches and returns match with 3 users
def find_match_of_3(matches: List[Match]) -> Optional[Match]:
    for match in matches:
        if len(match.users) == 3:
            return match
    return None
