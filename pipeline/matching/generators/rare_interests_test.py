import pytest

from pipeline.matching.generators import RareInterestsGenerator
from pipeline.types import (
    Interest,
    InterestCode,
    Match,
    MatchingInput,
    MatchMetadata,
    User,
)


def test_single_rare_interest():
    hiking = Interest(code="hiking", name="Hiking")
    swimming = Interest(code="swimming", name="Swimming")
    reading = Interest(code="reading", name="Reading")

    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(uid="1", displayName="A", interests=[hiking, swimming]),
            User(uid="2", displayName="B", interests=[swimming, reading]),
            User(uid="3", displayName="C", interests=[reading]),
            User(uid="4", displayName="D", interests=[swimming]),
        ],
        recent_matches=[],
        interests=[hiking, swimming, reading],
    )

    generator = RareInterestsGenerator(max_frequency=1.0)
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"2", "3"},
            metadata=MatchMetadata(
                generator="rareInterestsGenerator",
                score=0.4,
                rareInterests=["Reading"],
            ),
        ),
    ]
    assert actual == expected


def test_multi_rare_intrest():
    hiking = Interest(code="hiking", name="Hiking")
    swimming = Interest(code="swimming", name="Swimming")
    reading = Interest(code="reading", name="Reading")
    cooking = Interest(code="cooking", name="Cooking")

    inp = MatchingInput(
        community="test2",
        release="2022-07-12",
        users=[
            User(uid="1", displayName="A", interests=[hiking, swimming]),
            User(uid="2", displayName="B", interests=[swimming, reading]),
            User(uid="3", displayName="C", interests=[reading, cooking]),
            User(uid="4", displayName="D", interests=[swimming, cooking]),
        ],
        recent_matches=[],
        interests=[hiking, swimming, reading, cooking],
    )

    generator = RareInterestsGenerator(max_frequency=1.0)
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"3", "4"},
            metadata=MatchMetadata(
                generator="rareInterestsGenerator",
                score=0.29,
                rareInterests=["Cooking"],
            ),
        ),
    ]
    assert actual == expected


def test_odd_users():
    pass


def test_null_inputs():
    pass


# TODO: Add more test cases for your logic
