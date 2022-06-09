from dataclasses import dataclass, field
from typing import List, Tuple

from pipeline.types.intent import Intent
from pipeline.types.interest import Interest
from pipeline.types.schedule import Availability

UserId = str
UserGroup = Tuple[UserId, ...]


@dataclass
class User:
    uid: UserId
    displayName: str
    date_of_birth: str = ""
    interests: List[Interest] = field(default_factory=list)
    intents: List[Intent] = field(default_factory=list)
    schedule: List[Availability] = field(default_factory=list)
