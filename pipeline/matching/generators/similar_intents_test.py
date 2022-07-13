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


# second test case
# user has multiple intents and some intent matches with another user
def test_mult_intents_user():
    tutoring = Intent(code="tutoring", name="Tutoring", side=Side.BLANK)
    chess = Intent(code="chess", name="Chess", side=Side.BLANK)
    golf = Intent(code="golf", name="Golf", side=Side.BLANK)

    # creating intents
    seek_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.SEEKING)
    give_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.GIVING)
    seek_chess = Intent(code="chess", name="Chess Player", side=Side.SEEKING)
    golf_buddy = Intent(code="golf", name="Golf Buddy", side=Side.SEEKING)

    inp2 = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(uid="1", displayName="A", intents=[seek_chess, seek_tutoring]),
            User(uid="2", displayName="B", intents=[give_tutoring, golf_buddy]),
        ],
        recent_matches=[],
        intents=[tutoring, chess, golf],
    )

    generator = SimilarIntentsGenerator(min_common=1)
    actual2 = list(generator.generate(inp2))

    expected_intent2 = IntentMatch(code="tutoring", seeker="1", giver="2")
    expected2 = [
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="similarIntentsGenerator",
                score=1,
                matchingIntents=[expected_intent2],
            ),
        ),
    ]
    assert actual2 == expected2

    # test case in the event the input only has one user


def test_one_user():
    golf = Intent(code="golf", name="Golf", side=Side.BLANK)

    # creating intents
    golf_buddy = Intent(code="golf", name="Golf Buddy", side=Side.GIVING)

    inp3 = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(uid="1", displayName="A", intents=[golf_buddy]),
        ],
        recent_matches=[],
        intents=[golf],
    )

    generator = SimilarIntentsGenerator(min_common=1)
    actual3 = list(generator.generate(inp3))

    assert actual3 == []


# test case where users match on more than one intent
def test_mult_match_intent():

    tutoring = Intent(code="tutoring", name="Tutoring", side=Side.BLANK)
    chess = Intent(code="chess", name="Chess", side=Side.BLANK)
    singing = Intent(code="sing", name="Singing", side=Side.BLANK)
    guitar = Intent(code="guitar", name="Guitar", side=Side.BLANK)

    seek_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.SEEKING)
    give_tutoring = Intent(code="tutoring", name="Tutoring", side=Side.GIVING)
    seek_sing = Intent(code="sing", name="Singing Lessons", side=Side.SEEKING)
    give_sing = Intent(code="sing", name="Singing Lessons", side=Side.GIVING)
    seek_guitar = Intent(
        code="guitar", name="Guitar Lessons", side=Side.SEEKING
    )
    give_guitar = Intent(code="guitar", name="Guitar Lessons", side=Side.GIVING)
    seek_chess = Intent(code="chess", name="Chess", side=Side.SEEKING)
    give_chess = Intent(code="chess", name="Chess", side=Side.GIVING)

    inp4 = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(uid="1", displayName="A", intents=[give_guitar, seek_sing]),
            User(uid="2", displayName="B", intents=[give_chess, seek_tutoring]),
            User(uid="3", displayName="C", intents=[seek_guitar, give_sing]),
            User(uid="4", displayName="D", intents=[give_tutoring, seek_chess]),
        ],
        recent_matches=[],
        intents=[tutoring, chess, singing, guitar],
    )

    generator = SimilarIntentsGenerator(min_common=1)
    actual4 = list(generator.generate(inp4))

    expected_intent4 = IntentMatch(code="guitar", seeker="3", giver="1")
    expected_intent5 = IntentMatch(code="sing", seeker="1", giver="3")
    expected_intent6 = IntentMatch(code="tutoring", seeker="2", giver="4")
    expected_intent7 = IntentMatch(code="chess", seeker="4", giver="2")

    expected4 = [
        Match(
            users={"1", "3"},
            metadata=MatchMetadata(
                generator="similarIntentsGenerator",
                score=1,
                matchingIntents=[expected_intent4, expected_intent5],
            ),
        ),
        Match(
            users={"2", "4"},
            metadata=MatchMetadata(
                generator="similarIntentsGenerator",
                score=1,
                matchingIntents=[expected_intent7, expected_intent6],
            ),
        ),
    ]
    assert actual4 == expected4
