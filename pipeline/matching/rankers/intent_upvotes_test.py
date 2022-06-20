import pytest

from pipeline.matching.rankers import IntentUpvotesRanker
from pipeline.types import (
    IntentMatch,
    IntentUpvote,
    Match,
    MatchingInput,
    MatchMetadata,
    Side,
)


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

    ranker = IntentUpvotesRanker()
    actual = list(ranker.rank(inp, proposed))

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
    # TODO: Uncomment this assertion and delete the proposed assert
    # assert actual == expected
    assert actual == proposed


# TODO: Add more test cases for your logic