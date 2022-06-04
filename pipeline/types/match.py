from dataclasses import dataclass, field
from typing import Dict, List, Optional, Set

from pipeline.types.release import Community, ReleaseTag
from pipeline.types.user import User, UserId

MatchMetadata = Dict


@dataclass
class Match:
    users: Set[UserId]
    metadata: Dict = field(default_factory=dict)
    community: Optional[str] = None
    release: Optional[ReleaseTag] = None
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
