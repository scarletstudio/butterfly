from typing import Dict, List

from pipeline.matching.generators.satirical import (
    configure_generate_common_letters,
)
from pipeline.types import Match, MatchingInput, User


def make_letter_metadata(common_letters: List[str]) -> Dict:
    """Helper to make expected metadata for common letter generator."""
    return {
        "generator": "generateCommonLetters",
        "generateCommonLetters": {"commonLetters": common_letters},
    }


def test_generate_common_letters_no_minimum():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[
            User(uid="1", displayName="Anna L"),
            User(uid="2", displayName="Ankur P"),
            User(uid="3", displayName="Anna L"),
        ],
        recent_matches=[],
    )
    generate = configure_generate_common_letters()
    actual = list(generate(inp))
    expected = [
        Match(users={"1", "2"}, metadata=make_letter_metadata(["a", "n"])),
        Match(users={"1", "3"}, metadata=make_letter_metadata(["a", "l", "n"])),
        Match(users={"2", "3"}, metadata=make_letter_metadata(["a", "n"])),
    ]
    assert actual == expected


def test_generate_common_letters_min_common():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[
            User(uid="1", displayName="Ben"),
            User(uid="2", displayName="Benjamin"),
            User(uid="3", displayName="Boo"),
        ],
        recent_matches=[],
    )
    generate = configure_generate_common_letters(min_common=3)
    actual = list(generate(inp))
    expected = [
        Match(
            users={"1", "2"},
            metadata=make_letter_metadata(["b", "e", "n"]),
        )
    ]
    assert actual == expected
