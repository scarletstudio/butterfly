import pytest

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


# TODO: Remove @pytest.mark.skip() to run your test
@pytest.mark.skip()
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
            User(uid="2", displayName="B", interests=[availability_3]),
            User(
                uid="2",
                displayName="C",
                schedule=[availability_1, availability_2, availability_3],
            ),
        ],
        recent_matches=[],
    )

    # TODO: Replace with your generate function
    actual = []

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
    assert actual == expected


# TODO: Add more test cases for your logic
