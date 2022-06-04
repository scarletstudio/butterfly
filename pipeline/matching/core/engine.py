from typing import List, Set

from pipeline.types import (
    Match,
    MatchFinalizer,
    MatchGenerator,
    MatchingInput,
    MatchingOutput,
    MatchRanker,
    UserId,
)


class MatchingEngine:
    def __init__(self, generators, ranker, finalizer):
        self.generators: List[MatchGenerator] = generators
        self.ranker: MatchRanker = ranker
        self.finalizer: MatchFinalizer = finalizer

    def run(self, inp: MatchingInput) -> MatchingOutput:
        # Generate matches
        proposed_matches: List[Match] = []
        for generate_matches in self.generators:
            for match in generate_matches(inp):
                proposed_matches.append(match)
        # Rank matches
        selected_matches: List[Match] = []
        users_to_match: Set[UserId] = {u.uid for u in inp.users}
        for match in self.ranker(inp, proposed_matches):
            if match.users.issubset(users_to_match):
                selected_matches.append(match)
                users_to_match.difference_update(match.users)
        # Finalize matches for users without a match
        remaining_users = [u for u in inp.users if u.uid in users_to_match]
        for match in self.finalizer(remaining_users, inp.recent_matches):
            selected_matches.append(match)
        # Return output
        return MatchingOutput(
            community=inp.community,
            release=inp.release,
            users=inp.users,
            matches=selected_matches,
        )
