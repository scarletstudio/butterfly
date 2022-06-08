from typing import Iterator, List, Set, Tuple

from pipeline.matching.core.constants import (
    N_MEMBERS_FOR_FINAL_MATCH,
    N_MEMBERS_FOR_PRIORITY_MATCH,
)
from pipeline.types import (
    Match,
    MatchFinalizer,
    MatchGenerator,
    MatchingInput,
    MatchingOutput,
    MatchRanker,
    UserId,
)

ERROR_USERS_FOR_PRIORITY_MATCH = "Priority matches should have two users."
ERROR_USER_NOT_MATCHED = "One user left after selecting priority matches."


class UserNotMatchedException(Exception):
    pass


class MatchingEngine:
    def __init__(self, generators, ranker, finalizer):
        self.generators: List[MatchGenerator] = generators
        self.ranker: MatchRanker = ranker
        self.finalizer: MatchFinalizer = finalizer

    def run(self, inp: MatchingInput) -> MatchingOutput:
        # Generate matches
        proposed_matches: Iterator[Match] = self.generate_matches(inp)
        # Rank matches
        ranked_matches: Iterator[Match] = self.ranker(inp, proposed_matches)
        # Select priority matches and get remaining users
        results = self.select_priority_matches(inp, ranked_matches)
        selected: List[Match] = results[0]
        users: Set[UserId] = results[1]
        # Finalize remaining matches
        final_matches: List[Match] = self.finalize_matches(inp, selected, users)
        # Return output
        return MatchingOutput(
            community=inp.community,
            release=inp.release,
            users=inp.users,
            matches=final_matches,
        )

    def generate_matches(self, inp: MatchingInput) -> Iterator[Match]:
        for generate_matches in self.generators:
            for match in generate_matches(inp):
                yield match

    def select_priority_matches(
        self, inp: MatchingInput, proposed_matches: Iterator[Match]
    ) -> Tuple[List[Match], Set[UserId]]:
        selected_matches: List[Match] = []
        users_to_match: Set[UserId] = {u.uid for u in inp.users}
        for match in proposed_matches:
            # If all users have been matched, stop considering matches
            if not users_to_match:
                break
            # If remaining users are a group of three, skip to the final match
            # Note: If only two users remain, continue looking for a match
            if len(users_to_match) == N_MEMBERS_FOR_FINAL_MATCH:
                break
            # Logic assumes that priority matches only have two users
            if len(match.users) != N_MEMBERS_FOR_PRIORITY_MATCH:
                inp.logger.warning(ERROR_USERS_FOR_PRIORITY_MATCH)
                continue
            # If all users in this match have yet to be matched, select it
            if match.users.issubset(users_to_match):
                selected_matches.append(match)
                users_to_match.difference_update(match.users)
        # Make final match in case there is one group left
        # Note: This time, we consider groups of two or three, not just three
        if users_to_match:
            if len(users_to_match) == 1:
                raise UserNotMatchedException(ERROR_USER_NOT_MATCHED)
            if len(users_to_match) <= N_MEMBERS_FOR_FINAL_MATCH:
                final_match = Match(users=users_to_match)
                selected_matches.append(final_match)
                users_to_match = set()
        return selected_matches, users_to_match

    def finalize_matches(
        self,
        inp: MatchingInput,
        selected_matches: List[Match],
        users_to_match: Set[UserId],
    ) -> List[Match]:
        finalized_matches: List[Match] = [*selected_matches]
        # Finalize matches for users without a match, if any
        remaining_users = [u for u in inp.users if u.uid in users_to_match]
        if remaining_users:
            for match in self.finalizer(inp, remaining_users):
                finalized_matches.append(match)
        return finalized_matches