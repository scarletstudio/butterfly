from typing import List, Tuple

from pipeline.matching.core.utils import get_recent_match_sets
from pipeline.types import Match, User

# Tuple of counts: (total, tier 2 matches, tier 3 matches)
MatchCountsByTier = Tuple[int, int, int]


def validate_matches(
    matches: List[Match], users: List[User], recent_matches: List[Match]
) -> MatchCountsByTier:
    # Validate that correct users are present
    matched_users = {uid for m in matches for uid in m.users}
    all_users = {u.uid for u in users}
    no_missing_users = len(all_users - matched_users) == 0
    no_extra_users = len(matched_users - all_users) == 0
    assert no_missing_users
    assert no_extra_users

    # Validate that no user is matched more than once
    uid_list = [uid for m in matches for uid in m.users]
    no_multiple_matches = len(uid_list) == len(all_users)
    assert no_multiple_matches

    # Validate that matches are the right size
    for m in matches:
        two_or_three_members = len(m.users) in {2, 3}
        assert two_or_three_members

    # Summarize tiers
    recent = get_recent_match_sets(recent_matches)
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
