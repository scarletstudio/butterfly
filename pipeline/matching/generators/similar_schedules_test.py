import pytest

from pipeline.types import (
    Availability,
    Match,
    MatchingInput,
    MatchMetadata,
    User,
    WeekdayCode,
)


# TODO: Remove @pytest.mark.skip() to run your test
@pytest.mark.skip()
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

    # TODO: Replace with your generate function
    actual = []

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
