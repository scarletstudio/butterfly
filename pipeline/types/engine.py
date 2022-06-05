from dataclasses import dataclass
from typing import Callable, Iterator, List, Set

from pipeline.types.logging import DefaultLogger, EngineLogger
from pipeline.types.match import Match
from pipeline.types.release import Community, ReleaseTag
from pipeline.types.user import User, UserId

EngineId = str

RecentMatch = Match
RecentlyMatchedUsers = Set[UserId]


@dataclass
class MatchingInput:
    community: Community
    release: ReleaseTag
    users: List[User]
    recent_matches: List[Match]
    logger: EngineLogger = DefaultLogger()


MatchGenerator = Callable[[MatchingInput], Iterator[Match]]
MatchRanker = Callable[[MatchingInput, List[Match]], Iterator[Match]]
MatchFinalizer = Callable[[MatchingInput, List[User]], Iterator[Match]]


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
