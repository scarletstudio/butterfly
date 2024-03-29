from collections import defaultdict
from typing import Dict, Iterator, List, Tuple

from pipeline.types import (
    GeneratorId,
    Intent,
    Match,
    MatchingInput,
    MatchingMetrics,
    Side,
    User,
)


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

    def count_matches_per_generator(
        self, matches: List[Match]
    ) -> Dict[GeneratorId, int]:
        count_per_generator: Dict[GeneratorId, int] = {}
        for match in matches:
            generator = match.metadata.generator
            if generator in count_per_generator:
                count_per_generator[generator] += 1
            else:
                count_per_generator[generator] = 1
        return count_per_generator

    def count_selection_rate_per_generator(
        self, proposed_matches: List[Match], selected_matches: List[Match]
    ) -> Dict[GeneratorId, Tuple[int, int]]:
        proposed_count = self.count_matches_per_generator(proposed_matches)
        selected_count = self.count_matches_per_generator(selected_matches)

        generator_selection_rate = {}
        for key, proposed in proposed_count.items():
            selected = selected_count.get(key, 0)
            t = (selected, proposed)
            generator_selection_rate[key] = t
        return generator_selection_rate

    def intent_distribution_in_selected_matches(
        self, matches: List[Match]
    ) -> Dict[str, int]:
        total_count: Dict[str, int] = {}

        for match in matches:
            intent_type = []
            if match.metadata.generator == "rareIntentsGenerator":
                intent_type = match.metadata.rareIntents
            elif match.metadata.generator == "similarIntentsGenerator":
                intent_type = match.metadata.intents

            for intent in intent_type:
                if intent.code in total_count:
                    total_count[intent.code] = total_count[intent.code] + 1
                else:
                    total_count[intent.code] = 1

        return total_count

    def intent_distribution_in_community(
        self, users: List[User]
    ) -> Tuple[Dict, Dict]:

        total_count_giving: Dict[str, int] = {}
        total_count_seeking: Dict[str, int] = {}

        for user in users:
            for intent in user.intents:
                if intent.side == Side.GIVING:
                    if intent.code in total_count_giving:
                        total_count_giving[intent.code] = (
                            total_count_giving[intent.code] + 1
                        )
                    else:
                        total_count_giving[intent.code] = 1
                else:
                    if intent.code in total_count_seeking:
                        total_count_seeking[intent.code] = (
                            total_count_seeking[intent.code] + 1
                        )
                    else:
                        total_count_seeking[intent.code] = 1

        return total_count_giving, total_count_seeking
