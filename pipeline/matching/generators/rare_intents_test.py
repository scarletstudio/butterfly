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
    comedy = Intent(code="comedy", name="Comedy", side=Side.BLANK)
    seek_comedy = Intent(code="comedy", name="Comedy", side=Side.SEEKING)
    give_comedy = Intent(code="comedy", name="Comedy", side=Side.GIVING)

    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(
                uid="1", displayName="A", intents=[seek_tutoring, seek_comedy]
            ),
            User(uid="2", displayName="B", interests=[give_tutoring]),
            User(
                uid="3", displayName="C", interests=[give_tutoring, seek_comedy]
            ),
        ],
        recent_matches=[],
        intents=[tutoring],
    )

    # TODO: Replace with your generate function
    actual = []

    expected_intent = IntentMatch(code="comedy", seeker="1", giver="3")
    expected = [
        Match(
            users={"1", "3"},
            metadata=MatchMetadata(
                generator="rareIntentsGenerator",
                rareIntents=[expected_intent],
            ),
        ),
    ]
    assert actual == expected


# TODO: Add more test cases for your logic
