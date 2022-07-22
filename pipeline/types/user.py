import datetime
from dataclasses import dataclass, field
from typing import List, Tuple

from pipeline.types.community import UserCommunityMemberships
from pipeline.types.intent import Intent
from pipeline.types.interest import Interest
from pipeline.types.schedule import Availability

UserId = str
UserGroup = Tuple[UserId, ...]


@dataclass
class User:
    uid: UserId
    displayName: str = ""
    email: str = ""
    photo_url: str = ""
    communities: UserCommunityMemberships = field(default_factory=dict)
    latest_login: datetime.datetime = field(
        default_factory=lambda: datetime.datetime.fromtimestamp(0)
    )
    interests: List[Interest] = field(default_factory=list)
    intents: List[Intent] = field(default_factory=list)
    schedule: List[Availability] = field(default_factory=list)
