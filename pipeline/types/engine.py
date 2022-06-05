from dataclasses import dataclass, field
from typing import Callable, Iterator, List, Set

from pipeline.types.intent import Intent
from pipeline.types.interest import Interest
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
    interests: List[Interest] = field(default_factory=list)
    intents: List[Intent] = field(default_factory=list)


MatchGenerator = Callable[[MatchingInput], Iterator[Match]]
MatchRanker = Callable[[MatchingInput, Iterator[Match]], Iterator[Match]]
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
