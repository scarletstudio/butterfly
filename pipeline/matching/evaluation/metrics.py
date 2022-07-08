from collections import defaultdict
from typing import Dict, Iterator, List

from pipeline.types import Match, MatchingInput, MatchingMetrics, User


class MatchingMetricsCollector:
    def __init__(self):
        pass

    def count_proposed_matches_per_user(
        self, users: List[User], ranked_matches: Iterator[Match]
    ) -> Dict:

        metrics: Dict = defaultdict(int)
        for match in ranked_matches:
            for user_id in match.users:
                metrics[user_id] += 1
        for user in users:
            if user.uid not in metrics:
                metrics[user.uid] = 0
        return dict(metrics)
