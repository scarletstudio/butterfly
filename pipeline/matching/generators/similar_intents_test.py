import pytest

from pipeline.types import (
    Intent,
    IntentMatch,
    Match,
    MatchingInput,
    MatchMetadata,
    Side,
    User,
)


# TODO: Remove @pytest.mark.skip() to run your test
@pytest.mark.skip()
def test_example():
    tutoring = Intent(code="tutoring", name="Tutoring", side=Side.BLANK)
    seek_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.SEEKING)
    give_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.GIVING)

    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(uid="1", displayName="A", intents=[seek_tutoring]),
            User(uid="2", displayName="B", interests=[give_tutoring]),
        ],
        recent_matches=[],
        intents=[tutoring],
    )

    # TODO: Replace with your generate function
    actual = []

    expected_intent = IntentMatch(code="tutoring", giver="2", seeker="1")
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
    assert actual == expected


# TODO: Add more test cases for your logic
