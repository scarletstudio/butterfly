from typing import List, Tuple

from pipeline.matching.utils import get_recently_matched_users_by_user
from pipeline.types import Match, User

# Tuple of counts: (total, tier 2 matches, tier 3 matches)
MatchCountsByTier = Tuple[int, int, int]


class MatchValidationError(Exception):
    pass


def validate_matches(
    matches: List[Match], users: List[User], recent_matches: List[Match]
) -> MatchCountsByTier:
    # Validate that correct users are present
    matched_users = {uid for m in matches for uid in m.users}
    all_users = {u.uid for u in users}
    no_missing_users = len(all_users - matched_users) == 0
    no_extra_users = len(matched_users - all_users) == 0
    if not no_missing_users:
        raise MatchValidationError("Not all users have been matched.")
    if not no_extra_users:
        raise MatchValidationError("Output matches include extra users.")

    # Validate that no user is matched more than once
    uid_list = [uid for m in matches for uid in m.users]
    no_multiple_matches = len(uid_list) == len(all_users)
    if not no_multiple_matches:
        raise MatchValidationError("Some users are matched more than once.")

    # Validate that matches are the right size
    for m in matches:
        two_or_three_members = len(m.users) in {2, 3}
        if not two_or_three_members:
            raise MatchValidationError("Invalid number of users for a match.")

    # Summarize tiers
    recent = get_recently_matched_users_by_user(recent_matches)
    n_tier = {2: 0, 3: 0}
    for m in matches:
        is_tier_three = False
        for uid in m.users:
            previous_users = m.users.intersection(recent[uid])
            if len(previous_users) > 0:
                is_tier_three = True
        if is_tier_three:
            n_tier[3] += 1
        else:
            n_tier[2] += 1
    return len(matches), n_tier[2], n_tier[3]
