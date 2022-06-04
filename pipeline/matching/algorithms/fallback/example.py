"""
Demo of simple matching engine that only uses the fallback algorithm.
"""

import sys

sys.path.append("./")

import datetime

from pipeline.matching.algorithms.fallback import get_fallback_matches
from pipeline.matching.evaluation.validation import validate_matches
from pipeline.schema.match import Match
from pipeline.schema.user import User

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
    matches = get_fallback_matches(users, recent_matches)
    for m in matches:
        print(f"\t{m}")
    total, t2, t3 = validate_matches(matches, users, recent_matches)
    print(f"\tTotal = {total}, T2: {t2}, T3: {t3}")
    print()

    # Run matching and validate output with a new user
    print("Validate Next Matches with New User:")
    new_user = User(uid="H", displayName="H")
    new_users = [*users, new_user]
    matches = get_fallback_matches(new_users, recent_matches)
    for m in matches:
        print(f"\t{m}")
    total, t2, t3 = validate_matches(matches, new_users, recent_matches)
    print(f"\tTotal = {total}, T2: {t2}, T3: {t3}")
    print()

    print("Done.")
