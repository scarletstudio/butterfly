from dataclasses import dataclass
from enum import Enum

IntentCode = str


class Side(Enum):
    SEEKING = "seeking"
    GIVING = "giving"
    BLANK = "blank"


@dataclass
class Intent:
    code: IntentCode
    side: Side
    name: str
