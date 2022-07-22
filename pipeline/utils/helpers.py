from typing import List, Optional

from pipeline.types import Match


def find_match_of_3(matches: List[Match]) -> Optional[Match]:
    print(matches)
    for users in matches:
        if users in matches == 3:
            return users
        else:
            return None
    return users

    # for users in matches:
    #     if matches == 3:
    #         return matches
    #     else:
    #         return None
