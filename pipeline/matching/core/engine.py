from typing import List, Set

from pipeline.types import (
    Match,
    MatchFallback,
    MatchGenerator,
    MatchingInput,
    MatchingOutput,
    MatchRanker,
    MatchScorer,
    ScoredMatch,
    UserId,
)


class MatchingEngine:
    def __init__(self, generators, scorer, ranker, fallback):
        self.generators: List[MatchGenerator] = generators
        self.scorer: MatchScorer = scorer
        self.ranker: MatchRanker = ranker
        self.fallback: MatchFallback = fallback

    def run(self, inp: MatchingInput) -> MatchingOutput:
        # Generate matches
        proposed_matches: List[ScoredMatch] = []
        for generate_matches in self.generators:
            for match in generate_matches(inp):
                # Score matches
                score = self.scorer(inp, match)
                proposed_matches.append((match, score))
        # Rank matches
        selected_matches: List[Match] = []
        users_to_match: Set[UserId] = {u.uid for u in inp.users}
        for match, score in self.ranker(inp, proposed_matches):
            if match.users.issubset(users_to_match):
                selected_matches.append(match)
                users_to_match.difference_update(match.users)
        # Get users without a match
        remaining_users = [u for u in inp.users if u.uid in users_to_match]
        for match in self.fallback(remaining_users, inp.recent_matches):
            selected_matches.append(match)
        # Return output
        return MatchingOutput(
            community=inp.community,
            release=inp.release,
            users=inp.users,
            matches=selected_matches,
        )
