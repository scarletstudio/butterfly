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


# test one similar interest between two users
def test_one_similar_interest():
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
    assert actual == expected


# test where users do not have any similar interest
def test_no_similar_interest():
    hiking = Interest(code="hiking", name="Hiking")
    swimming = Interest(code="swimming", name="Swimming")
    reading = Interest(code="reading", name="Reading")
    painting = Interest(code="painting", name="Painting")

    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(uid="1", displayName="A", interests=[hiking, swimming]),
            User(uid="2", displayName="B", interests=[painting, reading]),
        ],
        recent_matches=[],
        interests=[hiking, swimming, painting, reading],
    )
    generator = SimilarInterestsGenerator(min_common=1)
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="similarInterestsGenerator",
                score=(0.0),
                commonInterests=[],
            ),
        ),
    ]
    assert actual == expected


# test where one user has more interest than another user
def test_one_with_many_interest():
    hiking = Interest(code="hiking", name="Hiking")
    swimming = Interest(code="swimming", name="Swimming")
    reading = Interest(code="reading", name="Reading")
    painting = Interest(code="painting", name="Painting")
    crocheting = Interest(code="crocheting", name="Crocheting")
    boxing = Interest(code="boxing", name="Boxing")

    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(
                uid="1",
                displayName="A",
                interests=[hiking, swimming, painting, crocheting, boxing],
            ),
            User(uid="2", displayName="B", interests=[painting]),
        ],
        recent_matches=[],
        interests=[hiking, swimming, painting, crocheting, boxing],
    )
    generator = SimilarInterestsGenerator(min_common=1)
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="similarInterestsGenerator",
                score=(1 / 5),
                commonInterests=["painting"],
            ),
        ),
    ]
    assert actual == expected


# test null attributes
def test_with_no_attributes():
    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[],
        recent_matches=[],
        interests=[],
    )
    generator = SimilarInterestsGenerator(min_common=1)
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"Empty", "Empty"},
            metadata=MatchMetadata(
                generator="similarInterestsGenerator",
                score=(0.0),
                commonInterests=[],
            ),
        ),
    ]
    assert actual == expected


# test one user with no interest
def test_one_user_no_interest():
    hiking = Interest(code="hiking", name="Hiking")
    swimming = Interest(code="swimming", name="Swimming")

    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(uid="1", displayName="A", interests=[hiking, swimming]),
            User(uid="2", displayName="B", interests=[]),
        ],
        recent_matches=[],
        interests=[hiking, swimming],
    )
    generator = SimilarInterestsGenerator(min_common=1)
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="similarInterestsGenerator",
                score=(0.0),
                commonInterests=[],
            ),
        ),
    ]
    assert actual == expected


# test two users with no interest
def test_two_users_no_interest():
    hiking = Interest(code="hiking", name="Hiking")
    swimming = Interest(code="swimming", name="Swimming")

    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(uid="1", displayName="A", interests=[]),
            User(uid="2", displayName="B", interests=[]),
        ],
        recent_matches=[],
        interests=[hiking, swimming],
    )
    generator = SimilarInterestsGenerator(min_common=1)
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="similarInterestsGenerator",
                score=(0.0),
                commonInterests=[],
            ),
        ),
    ]
    assert actual == expected
