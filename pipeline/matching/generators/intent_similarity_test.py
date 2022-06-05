from typing import Dict, List

import pytest

from pipeline.types import Intent, Match, MatchingInput, Side, User


def make_metadata(score: float, intents: List[Dict]) -> Dict:
    """Helper to make expected metadata for this generator."""
    return {
        "generator": "generateSimilarIntents",
        "generateSimilarInterests": {
            "score": score,
            "matchingIntents": intents,
        },
    }


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

    expected = [
        Match(
            users={"1", "2"},
            metadata=make_metadata(
                score=1,
                intents=[
                    {
                        "code": "tutoring",
                        "giving": "2",
                        "seeking": "1",
                    }
                ],
            ),
        ),
    ]
    assert actual == expected


# TODO: Add more test cases for your logic
