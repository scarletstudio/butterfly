from dataclasses import dataclass
from enum import Enum
from typing import Literal


# We use strings because Python datetime counts 0 as Monday while JavaScript
# Date counts 0 as Sunday. Each caller should convert to match their needs.
# We use three-letter codes because they are shorter and harder to misspell :)
class WeekdayCode(Enum):
    MON = "Mon"
    TUE = "Tue"
    WED = "Wed"
    THU = "Thu"
    FRI = "Fri"
    SAT = "Sat"
    SUN = "Sun"


# Hour number is in 24-hour time, with 0 as midnight 12 AM and 23 as 11 PM.
Hour = Literal[
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
]

# Currently we only allow users to define their availability on general weekdays
# rather than specific dates, and only at the granularity of hours.
@dataclass
class Availability:
    day: WeekdayCode
    hour: Hour
