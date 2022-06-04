import datetime
from dataclasses import dataclass
from typing import List, Optional, Set

from pipeline.schema.types import Community, ReleaseTag
from pipeline.schema.user import User, UserId


@dataclass
class Match:
    users: Set[UserId]
    community: Optional[str] = None
    release: Optional[datetime.datetime] = None
    key: Optional[str] = None
    title: Optional[str] = None


@dataclass
class MatchingInput:
    community: Community
    release: ReleaseTag
    users: List[User]
    recent_matches: List[Match]


@dataclass
class MatchingEvaluation:
    n_matches_total: int
    n_matches_tier_1: int
    n_matches_tier_2: int
    n_matches_tier_3: int


@dataclass
class MatchingOutput:
    community: Community
    release: ReleaseTag
    users: List[User]
    matches: List[Match]
