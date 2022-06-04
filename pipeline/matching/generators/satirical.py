from itertools import combinations
from typing import Iterator, Set

from pipeline.types import Match, MatchGenerator, MatchingInput


def get_unique_letters_from_name(name: str) -> Set[str]:
    return set(name.lower())


def configure_common_letter_generator(min_common: int = 0) -> MatchGenerator:
    def generator(inp: MatchingInput) -> Iterator[Match]:
        """
        Generates matches between users who have at least `min_common` unique letters in common between their names.

        Performance:
        - N is the number of users
        - S is the average length of a name, assume S is constant relative to N
        - Time Complexity: O(N^2)
        - Space Complexity: O(S)
        """
        for user_a, user_b in combinations(inp.users, r=2):
            letters_a = get_unique_letters_from_name(user_a.displayName)
            letters_b = get_unique_letters_from_name(user_b.displayName)
            n_common = len(letters_a.intersection(letters_b))
            if n_common >= min_common:
                yield Match(users={user_a.uid, user_b.uid})

    return generator
