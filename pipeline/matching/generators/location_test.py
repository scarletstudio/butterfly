import pytest

from pipeline.matching.generators.location import LocationGenerator
from pipeline.types import (
    IntentMatch,
    Match,
    MatchingInput,
    MatchMetadata,
    Side,
    User,
    UserId,
)


def test_example():
    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(
                uid="1",
                displayName="A",
                location="Kacek",
            ),
            User(uid="2", displayName="B", location="Kacek"),
            User(
                uid="3",
                displayName="C",
                location="Kacek",
            ),
        ],
        recent_matches=[],
    )

    generator = LocationGenerator()
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"1", "2", "3"},
            metadata=MatchMetadata(
                generator="locationGenerator",
                score=0.0,
                location=["Kacek", "Kacek", "Kacek"],
            ),
        )
    ]

    assert actual == expected


def test_example2():
    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(
                uid="1",
                displayName="A",
                location="Kacek",
            ),
            User(uid="2", displayName="B", location="Off-Campus"),
            User(
                uid="3",
                displayName="C",
                location="Kacek",
            ),
            User(
                uid="4",
                displayName="D",
                location="Cunningham",
            ),
        ],
        recent_matches=[],
    )

    generator = LocationGenerator()
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"1", "3"},
            metadata=MatchMetadata(
                generator="locationGenerator",
                score=0.0,
                location=["Kacek", "Kacek"],
            ),
        ),
        Match(
            users={"2", "4"},
            metadata=MatchMetadata(
                generator="locationGenerator",
                score=3.605551275463989,
                location=["Off-Campus", "Cunningham"],
            ),
        ),
    ]

    assert actual == expected


def test_example3():
    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(
                uid="1",
                displayName="A",
                location="Kacek",
            ),
            User(uid="2", displayName="B", location="Off-Campus"),
            User(
                uid="3",
                displayName="C",
                location="Kacek",
            ),
            User(
                uid="4",
                displayName="D",
                location="Cunningham",
            ),
            User(
                uid="5",
                displayName="E",
                location="The Quad",
            ),
            User(
                uid="6",
                displayName="F",
                location="McCormick Student Village",
            ),
        ],
        recent_matches=[],
    )

    generator = LocationGenerator()
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"1", "3"},
            metadata=MatchMetadata(
                generator="locationGenerator",
                score=0.0,
                location=["Kacek", "Kacek"],
            ),
        ),
        Match(
            users={"4", "6"},
            metadata=MatchMetadata(
                generator="locationGenerator",
                score=1.0,
                location=["Cunningham", "McCormick Student Village"],
            ),
        ),
        Match(
            users={"2", "5"},
            metadata=MatchMetadata(
                generator="locationGenerator",
                score=2.23606797749979,
                location=["Off-Campus", "The Quad"],
            ),
        ),
    ]

    assert actual == expected


def test_example4():
    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(
                uid="1",
                displayName="A",
                location="Kacek",
            ),
            User(uid="2", displayName="B", location="Off-Campus"),
            User(
                uid="3",
                displayName="C",
                location="Kacek",
            ),
            User(
                uid="4",
                displayName="D",
                location="Cunningham",
            ),
            User(
                uid="5",
                displayName="E",
                location="Cunningham",
            ),
        ],
        recent_matches=[],
    )

    generator = LocationGenerator()
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"1", "3"},
            metadata=MatchMetadata(
                generator="locationGenerator",
                score=0.0,
                location=["Kacek", "Kacek"],
            ),
        ),
        Match(
            users={"2", "4", "5"},
            metadata=MatchMetadata(
                generator="locationGenerator",
                score=3.605551275463989,
                location=["Off-Campus", "Cunningham", "Cunningham"],
            ),
        ),
    ]

    assert actual == expected
