import pytest

from pipeline.types import (
    IntentMatch,
    IntentUpvote,
    Match,
    MatchingInput,
    MatchMetadata,
    Side,
)


# TODO: Remove @pytest.mark.skip() to run your test
@pytest.mark.skip()
def test_example():
    intent_upvotes = [
        IntentUpvote(
            from_user="D",
            to_user="B",
            value=1,
            intent="tutoring",
            match="1",
            users={"D", "B"},
            generator="blueGenerator",
        )
    ]
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[],
        intent_upvotes=intent_upvotes,
    )
    proposed = [
        Match(
            users={"A", "C"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="A", giver="C")
                ],
            ),
        ),
        Match(
            users={"A", "B"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="A", giver="B")
                ],
            ),
        ),
    ]

    # TODO: Replace with your generate function
    actual = []

    expected = [
        Match(
            users={"A", "B"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="A", giver="B")
                ],
            ),
        ),
        Match(
            users={"A", "C"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="A", giver="C")
                ],
            ),
        ),
    ]
    assert actual == expected


# TODO: Add more test cases for your logic
