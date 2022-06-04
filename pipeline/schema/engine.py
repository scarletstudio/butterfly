from typing import Callable, Iterator, List, Set, Tuple

from pipeline.schema.match import Match, MatchingInput, MatchingOutput
from pipeline.schema.user import User, UserId

RecentMatch = Match
RecentlyMatchedUsers = Set[UserId]

MatchingFunction = Callable[[List[User], List[RecentMatch]], List[Match]]

Score = float
ScoredMatch = Tuple[Match, Score]

MatchGenerator = Callable[[MatchingInput], Iterator[Match]]
MatchScorer = Callable[[MatchingInput, Match], Score]
MatchRanker = Callable[
    [MatchingInput, List[ScoredMatch]], Iterator[ScoredMatch]
]
MatchFallback = Callable[[List[User], List[RecentMatch]], Iterator[Match]]
