import random
import string
from collections import defaultdict
from typing import DefaultDict, List, Set

from pipeline.types import Match, RecentlyMatchedUsers, User, UserGroup, UserId


def get_recently_matched_users_by_user(
    recent_matches: List[Match],
) -> DefaultDict[UserId, RecentlyMatchedUsers]:
    """
    For each user ID, returns the set of other user IDs who were recently
    matched to that user.
    """
    res = defaultdict(set)
    for m in recent_matches:
        for uid in m.users:
            res[uid].update(m.users)
    for uid in res:
        res[uid].remove(uid)
    return res


def get_user_group(match: Match) -> UserGroup:
    return tuple(sorted(match.users))


def get_user_groups_from_matches(matches: List[Match]) -> Set[UserGroup]:
    """Returns a set of tuples for all groups of user IDs in the given matches."""
    return {get_user_group(m) for m in matches}


def generate_keys(n: int, k: int = 8) -> List[str]:
    """
    These key will only unique within this batch of n keys.
    For k = 8, there are 62^8 = ~200 trillion possible combinations.
    Inputs:
      n: Number of keys to generate
      k: Number of characters in each key
    Output:
      List of keys, unique within this batch.
    """
    # Start by maintaining a set to avoid duplicates
    output: Set[str] = set()
    # Key can be composed of uppercase or lowercase letters or numbers
    chars = string.ascii_letters + string.digits
    for _ in range(n):
        key = None
        while key is None:
            # Create a random key of size k
            key = "".join(random.sample(chars, k))
            # Avoid duplicate keys
            if key in output:
                key = None
        output.add(key)
    # Convert output to list
    return list(output)
