import pytest

from pipeline.matching.utils import display_availability
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


def test_schedule():
    availability_1 = Availability(day=WeekdayCode.MON, hour=12)

    actual = display_availability(availability_1)
    expected = "Monday 12 pm"
    assert actual == expected


def test_schedule_1():
    availability_1 = Availability(day=WeekdayCode.TUE, hour=0)

    actual = display_availability(availability_1)
    expected = "Tuesday 12 am"
    assert actual == expected


def test_schedule_2():
    availability_1 = Availability(day=WeekdayCode.THU, hour=23)

    actual = display_availability(availability_1)
    expected = "Thursday 11 pm"
    assert actual == expected


def test_schedule_3():
    availability_1 = Availability(day=WeekdayCode.THU, hour=7)

    actual = display_availability(availability_1)
    expected = "Thursday 7 am"
    assert actual == expected
