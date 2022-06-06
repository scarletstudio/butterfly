import pytest

from pipeline.types import (
    Interest,
    InterestCode,
    Match,
    MatchingInput,
    MatchMetadata,
    User,
)


# TODO: Remove @pytest.mark.skip() to run your test
@pytest.mark.skip()
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

    # TODO: Replace with your generate function
    actual = []

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
    assert actual == expected


# TODO: Add more test cases for your logic
