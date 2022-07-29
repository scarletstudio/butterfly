import pytest

from pipeline.matching.generators import SimilarSchedulesGenerator
from pipeline.types import (
    Availability,
    Match,
    MatchingInput,
    MatchMetadata,
    User,
    WeekdayCode,
)


def test_example():
    availability_1 = Availability(day=WeekdayCode.MON, hour=12)
    availability_2 = Availability(day=WeekdayCode.MON, hour=13)
    users = [
        User(
            uid="1",
            displayName="A",
            schedule=[availability_1, availability_2],
        ),
        User(uid="2", displayName="B", schedule=[availability_2]),
    ]
    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=users,
        recent_matches=[],
    )

    generator = SimilarSchedulesGenerator(min_common=1)
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="similarSchedulesGenerator",
                score=1,
                matchingAvailability=[availability_2],
            ),
        ),
    ]

    assert actual == expected


# TODO: Add more test cases for your logic

# Test where user does not have similar schdedules
def test_no_similar_schedules():
    availability_1 = Availability(day=WeekdayCode.MON, hour=12)
    availability_2 = Availability(day=WeekdayCode.MON, hour=13)
    availability_3 = Availability(day=WeekdayCode.WED, hour=3)
    users = [
        User(
            uid="1",
            displayName="A",
            schedule=[availability_1, availability_2],
        ),
        User(uid="2", displayName="B", schedule=[availability_3]),
    ]
    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=users,
        recent_matches=[],
    )

    generator = SimilarSchedulesGenerator(min_common=1)
    actual = list(generator.generate(inp))

    expected = []

    assert actual == expected


# Test where user has at least one similar schdedules


def min_common_similar_schedules():
    availability_1 = Availability(day=WeekdayCode.MON.TUE, hour=12)
    availability_2 = Availability(day=WeekdayCode.TUE.WED, hour=12)
    users = [
        User(
            uid="1",
            displayName="A",
            schedule=[availability_1, availability_2],
        ),
        User(uid="2", displayName="B", schedule=[availability_2]),
    ]
    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=users,
        recent_matches=[],
    )

    generator = SimilarSchedulesGenerator(min_common=1)
    actual = list(generator.generate(inp))
    expected_schedule = Availability(day=WeekdayCode.TUE, hour=12)

    expected = [
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="similarSchedulesGenerator",
                matchingAvailability=[expected_schedule],
            ),
        ),
    ]
    assert actual == expected
