from typing import Callable, List

from pipeline.matching.core.types import MatchingFunction
from pipeline.matching.core.utils import get_recent_match_sets
from pipeline.schema.match import Match
from pipeline.schema.user import User


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
            best_output: List[Match] = []

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
