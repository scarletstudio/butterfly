from dataclasses import dataclass
from enum import Enum

IntentCode = str


class IntentSide(Enum):
    SEEKING = "Seeking"
    GIVING = "Giving"


@dataclass
class Intent:
    code: IntentCode
    side: IntentSide
    name: str
