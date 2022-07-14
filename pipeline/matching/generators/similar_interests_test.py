import pytest

from pipeline.matching.generators import SimilarInterestsGenerator
from pipeline.types import (
    Interest,
    InterestCode,
    Match,
    MatchingInput,
    MatchMetadata,
    User,
)


def test_example():
    hiking = Interest(code="hiking", name="Hiking")
    swimming = Interest(code="swimming", name="Swimming")
    reading = Interest(code="reading", name="Reading")

    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(uid="1", displayName="A", interests=[hiking, swimming]),
            User(uid="2", displayName="B", interests=[swimming, reading]),
        ],
        recent_matches=[],
        interests=[hiking, swimming, reading],
    )

    generator = SimilarInterestsGenerator(min_common=1)
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="similarInterestsGenerator",
                score=(1 / 3),
                commonInterests=["swimming"],
            ),
        ),
    ]
    # TODO: Uncomment this assertion and delete the empty list assert
    assert actual == expected
    # assert actual == []


# TODO: Add more test cases for your logic
