from typing import Dict, Iterator, List

from pipeline.types import Match, MatchingInput, MatchingInternalAnalytics, User


class CollectInternalAnalytics:
    def __init__(self):
        pass

    def n_proposed_matches_per_user(
        self, users: List[User], ranked_matches: Iterator[Match]
    ) -> MatchingInternalAnalytics:

        analytics: Dict = {}
        for match in ranked_matches:
            for user_id in match.users:
                if user_id in analytics:
                    analytics[user_id] += 1
                    continue
                analytics[user_id] = 1
        for user in users:
            if user.uid not in analytics:
                analytics[user.uid] = 0
        return MatchingInternalAnalytics(n_proposed_matches_per_user=analytics)
