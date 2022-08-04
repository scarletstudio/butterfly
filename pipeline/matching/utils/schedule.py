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


def display_availability(avail):

    weekday_converter = {
        WeekdayCode.MON: "Monday",
        WeekdayCode.TUE: "Tuesday",
        WeekdayCode.WED: "Wednesday",
        WeekdayCode.THU: "Thursday",
        WeekdayCode.FRI: "Friday",
        WeekdayCode.SAT: "Saturday",
        WeekdayCode.SUN: "Sunday",
    }
    if avail.hour == 0:
        hour_str = "12 am"
    elif avail.hour < 12:
        hour_str = str(avail.hour) + " am"
    elif avail.hour == 12:
        hour_str = "12 pm"
    elif avail.hour > 12:
        hour_str = str((avail.hour % 12)) + " pm"

    return weekday_converter[avail.day] + " " + hour_str
