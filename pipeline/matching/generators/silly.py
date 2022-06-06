from itertools import combinations
from typing import Iterator, Set

from pipeline.types import Match, MatchGenerator, MatchingInput, MatchMetadata

GENERATOR_COMMON_LETTERS = "commonLetterGenerator"


def get_unique_letters_from_name(name: str) -> Set[str]:
    return set(name.lower().replace(" ", ""))


def configure_generate_common_letters(min_common: int = 0) -> MatchGenerator:
    def generate(inp: MatchingInput) -> Iterator[Match]:
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
            common_letters = letters_a.intersection(letters_b)
            n_common = len(common_letters)
            if n_common < min_common:
                continue
            metadata = MatchMetadata(
                generator=GENERATOR_COMMON_LETTERS,
                commonLetters=list(sorted(common_letters)),
            )
            yield Match(users={user_a.uid, user_b.uid}, metadata=metadata)

    return generate
