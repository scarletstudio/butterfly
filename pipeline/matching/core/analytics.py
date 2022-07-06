import itertools
from collections import Counter
from typing import Iterator, List

from pipeline.types import Match, MatchingInput, MatchingInternalAnalytics, User


class CollectInternalAnalytics:
    def __init__(self):
        pass

    def n_proposed_matches_per_user(
        self, users: List[User], ranked_matches: Iterator[Match]
    ) -> MatchingInternalAnalytics:

        all_users_in_matches = []
        for match in ranked_matches:
            all_users_in_matches.append(match.users)
        all_users_in_matches = list(itertools.chain((all_users_in_matches)))
        n_proposed_matches_per_user = dict(Counter(all_users_in_matches))
        # for user in [
        #     user
        #     for user in users
        #     if user.uid not in n_proposed_matches_per_user.keys()
        # ]:
        #     n_proposed_matches_per_user[user.uid] = 0
        return MatchingInternalAnalytics(
            n_proposed_matches_per_user=n_proposed_matches_per_user
        )
