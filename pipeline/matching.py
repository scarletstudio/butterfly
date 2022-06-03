"""
Simple matching engine.
"""

import datetime
import random
from collections import defaultdict
from typing import Callable, DefaultDict, List, Optional, Set, Tuple
from pipeline.schema.user import User, UserId
from pipeline.schema.match import Match

"""
Demo Design

Three tiers of matches, in descending order of preference:
- Tier 1: Match to a member with a special reason
- Tier 2: Match to a member who was not a recent match
- Tier 3: Match to another member in the community

Three passes through the matching system:
1. Generate, rank, and select Tier 1 matches
2. Select Tier 2 matches for remaining members
3. Select Tier 3 matches for remaining members

Passes 2 and 3 could be combined by considering any match, but giving
preference to matches that have not been matched recently.

Notes:
- For an odd number of members, there will be at least one group of three
"""

# Dataclasses and Type Hints
RecentMatches = List[Match]
OutputMatches = List[Match]
MatchingFunction = Callable[[List[User], RecentMatches], OutputMatches]


# Constants
N_MEMBERS_FOR_FINAL_MATCH = 3


def get_recent_match_sets(
    recent_matches: List[Match],
) -> DefaultDict[UserId, Set[UserId]]:
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


def validate_matches(
    matches: List[Match], users: List[User], recent_matches: List[Match]
) -> Tuple[int, int, int]:
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


def best_effort_minimize_repeat_matches(
    n_retries: int = 5, log: Callable = print
):
    """
    Re-runs a matching function up to n times and returns the output with
    the fewest tier 3 matches. Otherwise, returns the last output.
    """

    def decorate_matching_function(do_matching: MatchingFunction):
        def inner(
            users: List[User], recent_matches: List[Match]
        ) -> List[Match]:
            # Get recent match sets to check for repeat matches
            recent = get_recent_match_sets(recent_matches)

            # Track the best output so far
            fewest_repeat_matches = len(users)
            best_output = None

            for i in range(1, n_retries + 1):
                # Run matching function
                log(f"Running attempt {i}...")
                matches = do_matching(users, recent_matches)

                # Count repeat matches
                n_repeat_matches = 0
                for m in matches:
                    is_repeat = False
                    for uid in m.users:
                        previous_users = m.users.intersection(recent[uid])
                        if len(previous_users) > 0:
                            is_repeat = True
                            break
                    if is_repeat:
                        n_repeat_matches += 1
                # If no repeat matches, quit early
                if n_repeat_matches == 0:
                    best_output = matches
                    break
                # Compare to current best output
                if n_repeat_matches < fewest_repeat_matches:
                    fewest_repeat_matches = n_repeat_matches
                    best_output = matches

            # Return best output
            log(
                (
                    f"Best output has {n_repeat_matches} repeat matches "
                    f"after {i} attempts."
                )
            )
            return best_output

        return inner

    return decorate_matching_function


def get_matches(users: List[User], recent_matches: List[Match]) -> List[Match]:
    """
    Generates random matches, giving preference to matches where the users
    were not recently matched. Falls back to any other remaining user. May
    return at most one group of three users.

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
        # Due to early stopping, this inner loop has O(R) time complexity instead
        # of O(N), because in the worst case, we visit all of the user's recent
        # matches before finding a new user
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


if __name__ == "__main__":

    # Prepare fake inputs
    users = [User(uid=a, displayName=a) for a in "ABCDEFG"]
    weeks = [
        datetime.datetime(2022, 3, 6),
        datetime.datetime(2022, 3, 13),
        datetime.datetime(2022, 3, 20),
    ]
    week_pairings = [
        "AB,CD,EFG",
        "AF,BG,CDE",
        "AE,BD,CFG",
    ]
    week_matches = [
        [
            Match(users={u for u in group}, release=week)
            for group in pairings.split(",")
        ]
        for week, pairings in zip(weeks, week_pairings)
    ]
    recent_matches = [m for week in week_matches for m in week]

    # Validate past matches
    print("Validate Previous Matches:")
    past_matches = []
    for current_matches in week_matches:
        total, t2, t3 = validate_matches(current_matches, users, past_matches)
        print(f"\tTotal = {total}, T2: {t2}, T3: {t3}")
        past_matches.extend(current_matches)
    print()

    # Run matching and validate output
    print("Validate Next Matches:")
    matches = get_matches(users, recent_matches)
    for m in matches:
        print(f"\t{m}")
    total, t2, t3 = validate_matches(matches, users, recent_matches)
    print(f"\tTotal = {total}, T2: {t2}, T3: {t3}")
    print()

    # Run matching and validate output with a new user
    print("Validate Next Matches with New User:")
    new_user = User(uid="H", displayName="H")
    new_users = [*users, new_user]
    matches = get_matches(new_users, recent_matches)
    for m in matches:
        print(f"\t{m}")
    total, t2, t3 = validate_matches(matches, new_users, recent_matches)
    print(f"\tTotal = {total}, T2: {t2}, T3: {t3}")
    print()

    print("Done.")
