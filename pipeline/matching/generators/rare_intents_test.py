import pytest

from pipeline.matching.generators import RareIntentsGenerator
from pipeline.types import (
    Intent,
    IntentMatch,
    Match,
    MatchingInput,
    MatchMetadata,
    Side,
    User,
)


def testOne():
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
            # ------
            User(uid="2", displayName="B", intents=[give_tutoring]),
            User(
                uid="3", displayName="C", intents=[give_tutoring, give_comedy]
            ),
            # ------
        ],
        recent_matches=[],
        intents=[tutoring],
    )

    generator = RareIntentsGenerator(max_frequency=1 / 2)
    actual = list(generator.generate(inp))

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
# create some pesudo test cases


def testTwo():  # testing multiple similar intents with zero matches. (see if code only checks intent)
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
            # ------
            User(uid="2", displayName="B", intents=[give_tutoring]),
            User(
                uid="3", displayName="C", intents=[give_tutoring, seek_comedy]
            ),
            # ------
        ],
        recent_matches=[],
        intents=[tutoring],
    )

    generator = RareIntentsGenerator(max_frequency=1 / 2)
    actual = list(generator.generate(inp))

    expected = []
    assert actual == expected


def testThree():  # testing singular user
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
        ],
        recent_matches=[],
        intents=[tutoring],
    )

    generator = RareIntentsGenerator(max_frequency=1)
    actual = list(generator.generate(inp))

    expected = []
    assert actual == expected


def testFour():  # testing multiple matches
    tutoring = Intent(code="tutoring", name="Tutoring", side=Side.BLANK)
    seek_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.SEEKING)
    give_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.GIVING)
    comedy = Intent(code="comedy", name="Comedy", side=Side.BLANK)
    seek_comedy = Intent(code="comedy", name="Comedy", side=Side.SEEKING)
    give_comedy = Intent(code="comedy", name="Comedy", side=Side.GIVING)
    looks = Intent(code="looks", name="Looks", side=Side.BLANK)
    seek_looks = Intent(code="looks", name="Looks", side=Side.SEEKING)
    give_looks = Intent(code="looks", name="Looks", side=Side.GIVING)
    gardening = Intent(code="gardening", name="Gardening", side=Side.BLANK)
    seek_gardening = Intent(
        code="gardening", name="Gardening", side=Side.SEEKING
    )
    give_gardening = Intent(
        code="gardening", name="Gardening", side=Side.GIVING
    )

    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(
                uid="1",
                displayName="A",
                intents=[seek_tutoring, seek_comedy, seek_looks],
            ),
            User(
                uid="2",
                displayName="B",
                intents=[give_tutoring, seek_gardening],
            ),
            User(
                uid="3",
                displayName="C",
                intents=[give_tutoring, give_comedy, seek_looks],
            ),
            User(
                uid="4", displayName="D", intents=[seek_tutoring, give_comedy]
            ),
            User(
                uid="5", displayName="E", intents=[give_looks, give_gardening]
            ),
        ],
        recent_matches=[],
        intents=[tutoring],
    )

    generator = RareIntentsGenerator(max_frequency=3 / 10)
    actual = list(generator.generate(inp))

    expected_intent1 = IntentMatch(code="gardening", seeker="2", giver="5")
    expected_intent2 = IntentMatch(code="looks", seeker="1", giver="5")
    expected_intent3 = IntentMatch(code="looks", seeker="3", giver="5")

    # question? Does order of the match list matter, test case will only pass if in this specific order

    expected = [
        Match(
            users={"1", "5"},
            metadata=MatchMetadata(
                generator="rareIntentsGenerator",
                rareIntents=[expected_intent2],
            ),
        ),
        Match(
            users={"3", "5"},
            metadata=MatchMetadata(
                generator="rareIntentsGenerator",
                rareIntents=[expected_intent3],
            ),
        ),
        Match(
            users={"2", "5"},
            metadata=MatchMetadata(
                generator="rareIntentsGenerator",
                rareIntents=[expected_intent1],
            ),
        ),
    ]

    assert actual == expected


def testFive():  # single user with same giving and seeking intent
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
                uid="1", displayName="A", intents=[seek_tutoring, give_tutoring]
            ),
        ],
        recent_matches=[],
        intents=[tutoring],
    )

    generator = RareIntentsGenerator(max_frequency=1)
    actual = list(generator.generate(inp))

    expected = []

    assert actual == expected


def testSix():  # match between two users over multiple intents
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
            # ------
            User(
                uid="2", displayName="B", intents=[give_tutoring, give_comedy]
            ),
            # ------
        ],
        recent_matches=[],
        intents=[tutoring, comedy],
    )

    generator = RareIntentsGenerator(max_frequency=1)
    actual = list(generator.generate(inp))

    expected_intent1 = IntentMatch(code="comedy", seeker="1", giver="2")
    expected_intent2 = IntentMatch(code="tutoring", seeker="1", giver="2")
    expected = [
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="rareIntentsGenerator",
                rareIntents=[expected_intent2, expected_intent1],
            ),
        ),
    ]
    assert actual == expected
