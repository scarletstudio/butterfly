import pytest

from pipeline.matching.generators import SimilarIntentsGenerator
from pipeline.types import (
    Intent,
    IntentMatch,
    Match,
    MatchingInput,
    MatchMetadata,
    Side,
    User,
)


def test_example():
    tutoring = Intent(code="tutoring", name="Tutoring", side=Side.BLANK)
    seek_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.SEEKING)
    give_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.GIVING)

    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(uid="1", displayName="A", intents=[seek_tutoring]),
            User(uid="2", displayName="B", intents=[give_tutoring]),
        ],
        recent_matches=[],
        intents=[tutoring],
    )

    generator = SimilarIntentsGenerator(min_common=1)
    actual = list(generator.generate(inp))

    expected_intent = IntentMatch(code="tutoring", seeker="1", giver="2")
    expected = [
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="similarIntentsGenerator",
                score=1,
                matchingIntents=[expected_intent],
            ),
        ),
    ]
    # TODO: Uncomment this assertion and delete the empty list assert

    assert actual == expected


# TODO: Add more test cases for your logic
