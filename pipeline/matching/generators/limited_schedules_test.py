import pytest

from pipeline.matching.generators import LimitedSchedulesGenerator
from pipeline.types import (
    Availability,
    Intent,
    IntentMatch,
    Match,
    MatchingInput,
    MatchMetadata,
    Side,
    User,
    WeekdayCode,
)


def test_example():
    availability_1 = Availability(day=WeekdayCode.MON, hour=12)
    availability_2 = Availability(day=WeekdayCode.MON, hour=13)
    availability_3 = Availability(day=WeekdayCode.MON, hour=14)

    inp = MatchingInput(
        community="test",
        release="2022-06-26",
        users=[
            User(
                uid="1",
                displayName="A",
                schedule=[availability_1, availability_2, availability_3],
            ),
            User(uid="2", displayName="B", schedule=[availability_3]),
            User(
                uid="3",
                displayName="C",
                schedule=[availability_1, availability_2, availability_3],
            ),
        ],
        recent_matches=[],
    )

    generator = LimitedSchedulesGenerator(max_available=1)
    actual = list(generator.generate(inp))

    expected = [
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="limitedSchedulesGenerator",
                limitedAvailability=[availability_3],
            ),
        ),
        Match(
            users={"2", "3"},
            metadata=MatchMetadata(
                generator="limitedSchedulesGenerator",
                limitedAvailability=[availability_3],
            ),
        ),
    ]

    # TODO: Uncomment this assertion and delete the empty list assert
    # assert actual == expected
    assert actual == expected


# TODO: Add more test cases for your logic
# no limited available users
# multiple limited available users
# max available greater than 1
# all limited available users?


def test_create_matches():
    # Part 1: Set up inputs
    users_availability = {
        (1, 2): [Availability(day="Mon", hour=9)],
        (1, 3): [Availability(day="Tue", hour=13)],
    }

    # Part 2: Get actual output
    generator = LimitedSchedulesGenerator()
    actual = generator.create_matches(users_availability)

    # Part 3: Define expected outputs and compare to actual
    expected = [
        Match(
            users={1, 2},
            metadata=MatchMetadata(
                generator="limitedSchedulesGenerator",
                availability=[Availability(day="Mon", hour=9)],
            ),
        ),
        Match(
            users={1, 3},
            metadata=MatchMetadata(
                generator="limitedSchedulesGenerator",
                availability=[Availability(day="Tue", hour=13)],
            ),
        ),
    ]
    print("Actual:", actual)
    assert actual == expected
