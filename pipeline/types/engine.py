from dataclasses import dataclass, field
from typing import Callable, Dict, Iterator, List, Set, Tuple

from pipeline.types.community import Community
from pipeline.types.intent import Intent
from pipeline.types.interest import Interest
from pipeline.types.logging import DefaultLogger, EngineLogger
from pipeline.types.match import Match
from pipeline.types.rating import IntentUpvote, MatchStars
from pipeline.types.release import ReleaseTag
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
    intent_upvotes: List[IntentUpvote] = field(default_factory=list)
    match_stars: List[MatchStars] = field(default_factory=list)


MatchGenerateFunction = Callable[[MatchingInput], Iterator[Match]]
MatchRankFunction = Callable[[MatchingInput, Iterator[Match]], Iterator[Match]]
MatchFinalizeFunction = Callable[[MatchingInput, List[User]], List[Match]]


@dataclass
class MatchingEvaluation:
    n_matches_total: int
    n_matches_tier_1: int
    n_matches_tier_2: int
    n_matches_tier_3: int


@dataclass
class MatchingInternalData:
    ranked_matches: List[Match] = field(default_factory=list)


@dataclass
class MatchingOutput:
    community: Community
    release: ReleaseTag
    users: List[User]
    matches: List[Match]
    internal_data: MatchingInternalData = MatchingInternalData()


@dataclass
class MatchingMetrics:

    distribution_in_community: Tuple = field(default_factory=tuple)
    distribution_in_final_set: Dict = field(default_factory=dict)
    # A dictionary where keys -> users and values -> integers
    n_proposed_matches_per_user: Dict = field(default_factory=dict)

    # More metrics will be added in the future
