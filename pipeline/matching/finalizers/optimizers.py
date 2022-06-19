from typing import Callable, List

from pipeline.matching.utils import get_recently_matched_users_by_user
from pipeline.types import Match, MatchFinalizeFunction, MatchingInput, User

MatchingFinalizeFunctionDecorator = Callable[
    [MatchFinalizeFunction], MatchFinalizeFunction
]


def best_effort_minimize_repeat_matches(
    n_retries: int,
) -> MatchingFinalizeFunctionDecorator:
    """
    Re-runs a matching finalizer up to n times and returns the output with
    the fewest tier 3 matches. Otherwise, returns the last output.
    """

    def decorate_matching_function(
        finalizer: MatchFinalizeFunction,
    ) -> MatchFinalizeFunction:
        def inner(inp: MatchingInput, users: List[User]) -> List[Match]:
            # Get recent match sets to check for repeat matches
            recent = get_recently_matched_users_by_user(inp.recent_matches)

            # Track the best output so far
            fewest_repeat_matches = len(users)
            best_output: List[Match] = []

            for i in range(1, n_retries + 1):
                # Run matching function
                inp.logger.info(f"Running attempt {i}...")
                matches = list(finalizer(inp, users))

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
            msg = f"Best output has {n_repeat_matches} repeat matches after {i} attempts."
            inp.logger.info(msg)
            return best_output

        return inner

    return decorate_matching_function
