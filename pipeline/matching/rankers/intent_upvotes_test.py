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
            community="test",
            match="1",
            users={"D", "B"},
            generator="blueGenerator",
            timestamp=0,
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
    actual = list(ranker.rank(inp, iter(proposed)))

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
    assert actual == expected
    # assert actual == proposed


# TODO: Add more test cases for your logic
def test_example2():
    intent_upvotes = [
        IntentUpvote(
            from_user="D",
            to_user="B",
            value=1,
            intent="tutoring",
            community="test",
            match="1",
            users={"D", "B"},
            generator="blueGenerator",
            timestamp=0,
        ),
        IntentUpvote(
            from_user="A",
            to_user="C",
            value=1,
            intent="tutoring",
            community="test",
            match="1",
            users={"A", "C"},
            generator="blueGenerator",
            timestamp=0,
        ),
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
            users={"C", "D"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="C", giver="D")
                ],
            ),
        ),
        Match(
            users={"E", "C"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="E", giver="C")
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
    actual = list(ranker.rank(inp, iter(proposed)))

    expected = [
        Match(
            users={"E", "C"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="E", giver="C")
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
        Match(
            users={"C", "D"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="C", giver="D")
                ],
            ),
        ),
    ]
    assert actual == expected


def test_example3():
    intent_upvotes = [
        IntentUpvote(
            from_user="D",
            to_user="B",
            value=1,
            intent="tutoring",
            community="test",
            match="1",
            users={"D", "B"},
            generator="blueGenerator",
            timestamp=0,
        ),
        IntentUpvote(
            from_user="A",
            to_user="C",
            value=1,
            intent="tutoring",
            community="test",
            match="1",
            users={"A", "C"},
            generator="blueGenerator",
            timestamp=0,
        ),
        IntentUpvote(
            from_user="D",
            to_user="C",
            value=1,
            intent="studying",
            community="test",
            match="1",
            users={"D", "C"},
            generator="blueGenerator",
            timestamp=0,
        ),
        IntentUpvote(
            from_user="A",
            to_user="B",
            value=1,
            intent="tutoring",
            community="test",
            match="1",
            users={"A", "B"},
            generator="blueGenerator",
            timestamp=0,
        ),
        IntentUpvote(
            from_user="C",
            to_user="B",
            value=1,
            intent="tutoring",
            community="test",
            match="1",
            users={"C", "B"},
            generator="blueGenerator",
            timestamp=0,
        ),
        IntentUpvote(
            from_user="A",
            to_user="C",
            value=1,
            intent="studying",
            community="test",
            match="1",
            users={"A", "C"},
            generator="blueGenerator",
            timestamp=0,
        ),
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
            users={"D", "B"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="D", giver="B")
                ],
            ),
        ),
    ]

    ranker = IntentUpvotesRanker()
    actual = list(ranker.rank(inp, iter(proposed)))

    expected = [
        Match(
            users={"D", "B"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="D", giver="B")
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


def test_example4():
    intent_upvotes = [
        IntentUpvote(
            from_user="D",
            to_user="B",
            value=1,
            intent="tutoring",
            community="test",
            match="1",
            users={"D", "B"},
            generator="blueGenerator",
            timestamp=0,
        ),
        IntentUpvote(
            from_user="A",
            to_user="C",
            value=1,
            intent="tutoring",
            community="test",
            match="1",
            users={"A", "C"},
            generator="blueGenerator",
            timestamp=0,
        ),
        IntentUpvote(
            from_user="D",
            to_user="C",
            value=1,
            intent="studying",
            community="test",
            match="1",
            users={"D", "C"},
            generator="blueGenerator",
            timestamp=0,
        ),
        IntentUpvote(
            from_user="A",
            to_user="B",
            value=1,
            intent="tutoring",
            community="test",
            match="1",
            users={"A", "B"},
            generator="blueGenerator",
            timestamp=0,
        ),
        IntentUpvote(
            from_user="C",
            to_user="B",
            value=1,
            intent="tutoring",
            community="test",
            match="1",
            users={"C", "B"},
            generator="blueGenerator",
            timestamp=0,
        ),
        IntentUpvote(
            from_user="A",
            to_user="C",
            value=1,
            intent="studying",
            community="test",
            match="1",
            users={"A", "C"},
            generator="blueGenerator",
            timestamp=0,
        ),
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
            users={"E", "H"},
            metadata=MatchMetadata(generator="someOtherGenerator"),
        ),
        Match(
            users={"D", "B"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="D", giver="B")
                ],
            ),
        ),
    ]

    ranker = IntentUpvotesRanker()
    actual = list(ranker.rank(inp, iter(proposed)))

    expected = [
        Match(
            users={"D", "B"},
            metadata=MatchMetadata(
                generator="similarIntentGenerator",
                matchingIntents=[
                    IntentMatch(code="tutoring", seeker="D", giver="B")
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
        Match(
            users={"E", "H"},
            metadata=MatchMetadata(generator="someOtherGenerator"),
        ),
    ]

    assert actual == expected
