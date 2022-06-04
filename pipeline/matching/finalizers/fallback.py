import random
from typing import List

from pipeline.matching.core.constants import N_MEMBERS_FOR_FINAL_MATCH
from pipeline.matching.core.utils import get_recent_match_sets
from pipeline.types import Match, User


def get_fallback_matches(
    users: List[User], recent_matches: List[Match]
) -> List[Match]:
    """
    Generates random matches, giving preference to matches where the users
    were not recently matched. Falls back to any other remaining user. May
    return at most one group of three users.

    The fallback algorithm is designed to be a final step in the matching engine, to ensure that every user gets a match.

    Performance:
    - N is the number of users
    - R is the number of recent matches per user, 0 <= R <= N
    - Generally, assume that R << N
    - Time Complexity: O(N*R), dominated by the first pass of matching
    - Space Complexity: O(N*R), dominated by the map of users to recent matches

    This algorithm is non-deterministic. Even if we used a random seed for the
    shuffling, we still use set iteration, which is not deterministic for strings.
    """
    final_matches = []

    # Part 1: Pass for tier 2 matches
    # Runs in O(N*R) time complexity, see command below for why it is not O(N^2)
    remaining_users = {u.uid for u in users}
    users_shuffled = random.sample([u.uid for u in users], len(users))
    all_recents = get_recent_match_sets(recent_matches)
    no_non_recent_matches = set()
    while remaining_users and len(remaining_users) > N_MEMBERS_FOR_FINAL_MATCH:
        my_uid = users_shuffled.pop()
        # The next user from the shuffled stack may already have been matched,
        # so we skip them if they are no longer in the remaining set
        if my_uid not in remaining_users:
            continue
        my_recents = all_recents[my_uid]
        other_uid = None
        # Due to early stopping, this inner loop has O(R) time complexity instead of O(N), because in the worst case, we visit all of the user's recent matches before finding a new user
        for uid in remaining_users:
            if uid != my_uid and uid not in my_recents:
                other_uid = uid
                break
        if other_uid is not None:
            match = Match(users={my_uid, other_uid})
            final_matches.append(match)
            remaining_users.remove(my_uid)
            remaining_users.remove(other_uid)
        else:
            # If we reach this point, none of the remaining users
            # can form a tier 2 match for this user
            no_non_recent_matches.add(my_uid)
            remaining_users.remove(my_uid)

    # Part 2: Pass for tier 3 matches
    # Runs in O(N) time complexity
    # Add members with no non-recent matches back to the match pool
    remaining_users.update(no_non_recent_matches)
    remaining_shuffled = random.sample(
        [uid for uid in remaining_users], len(remaining_users)
    )
    # Go through the shuffled remaining stack two at a time, making
    # matches until there are either two or three users left
    while len(remaining_users) > N_MEMBERS_FOR_FINAL_MATCH:
        my_uid = remaining_shuffled.pop()
        other_uid = remaining_shuffled.pop()
        match = Match(users={my_uid, other_uid})
        final_matches.append(match)
        remaining_users.remove(my_uid)
        remaining_users.remove(other_uid)
    # Match the remaining two or three members together
    match = Match(users=remaining_users)
    final_matches.append(match)

    return final_matches
