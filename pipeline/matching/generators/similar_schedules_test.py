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
        User(uid="2", displayName="B", interests=[availability_2]),
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
    # TODO: Uncomment this assertion and delete the empty list assert
    # assert actual == expected
    assert actual == []


# TODO: Add more test cases for your logic