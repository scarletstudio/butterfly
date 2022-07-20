import datetime
from dataclasses import dataclass
from typing import Dict

Community = str


@dataclass
class CommunityMembership:
    active: bool
    joined: datetime.datetime


UserCommunityMemberships = Dict[Community, CommunityMembership]
