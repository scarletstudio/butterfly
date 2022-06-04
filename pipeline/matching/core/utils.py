import random
import string
from collections import defaultdict
from typing import DefaultDict, List

from pipeline.matching.core.types import RecentlyMatchedUsers
from pipeline.schema.match import Match
from pipeline.schema.user import User, UserId


def get_recent_match_sets(
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
    output = set()
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
