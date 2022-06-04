from pipeline.matching.generators.satirical import (
    configure_common_letter_generator,
)
from pipeline.types import Match, MatchingInput, User


def test_common_letter_generator_no_minimum():
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[
            User(uid="1", displayName="Anna"),
            User(uid="2", displayName="Ankur"),
            User(uid="3", displayName="Anna"),
        ],
        recent_matches=[],
    )
    generator = configure_common_letter_generator()
    actual = list(generator(inp))
    expected = [
        Match(users={"1", "2"}),
        Match(users={"1", "3"}),
        Match(users={"2", "3"}),
    ]
    assert actual == expected


def test_common_letter_generator_min_common():
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
    generator = configure_common_letter_generator(min_common=3)
    actual = list(generator(inp))
    expected = [Match(users={"1", "2"})]
    assert actual == expected
