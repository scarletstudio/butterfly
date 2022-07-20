import datetime
from dataclasses import dataclass
from typing import Dict

Community = str

# Dict with keys:
# - active (boolean)
# - joined (timestamp in ms)
RawCommunityMembership = Dict

RawUserCommunityMemberships = Dict[Community, RawCommunityMembership]


@dataclass
class CommunityMembership:
    active: bool
    joined: datetime.datetime


UserCommunityMemberships = Dict[Community, CommunityMembership]
