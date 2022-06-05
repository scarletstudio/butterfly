from dataclasses import dataclass
from enum import Enum

IntentCode = str


class Side(Enum):
    SEEKING = "Seeking"
    GIVING = "Giving"
    BLANK = "Blank"


@dataclass
class Intent:
    code: IntentCode
    side: Side
    name: str
