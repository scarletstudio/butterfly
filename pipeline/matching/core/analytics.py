from pipeline.matching.core import MatchingEngine
from pipeline.types import MatchingInput, MatchingInternalAnalytics


class CollectInternalAnalytics:
    def __init__(self, name, matching_engine):
        self.name: str = name
        self.matching_engine: MatchingEngine = matching_engine

    def n_proposed_matches_per_user(
        self, inp: MatchingInput
    ) -> MatchingInternalAnalytics:

        n_proposed_matches_per_user = []
        for user in inp.users:
            match_count = 0
            for generator in self.matching_engine.generators:
                gen_matches = generator.generate(inp)
                for rank_match in self.matching_engine.ranker.rank(
                    inp, gen_matches
                ):
                    if user.uid in rank_match.users:
                        match_count += 1
            n_proposed_matches_per_user.append((user, match_count))
        return MatchingInternalAnalytics(
            n_proposed_matches_per_user=n_proposed_matches_per_user
        )
