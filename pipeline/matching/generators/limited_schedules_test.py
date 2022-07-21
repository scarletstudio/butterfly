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
