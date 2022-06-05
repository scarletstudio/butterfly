from dataclasses import dataclass, field
from typing import Dict, Optional, Set

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
