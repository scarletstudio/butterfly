from dataclasses import dataclass
from typing import Optional, Set

from pipeline.types.match_metadata import MatchMetadata
from pipeline.types.release import Community, ReleaseTag
from pipeline.types.user import User, UserId


@dataclass
class Match:
    users: Set[UserId]
    metadata: MatchMetadata = MatchMetadata()
    community: Optional[str] = None
    release: Optional[ReleaseTag] = None
    key: Optional[str] = None
    title: Optional[str] = None
