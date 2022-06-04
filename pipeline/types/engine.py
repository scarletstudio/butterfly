from typing import Callable, Iterator, List, Set

from pipeline.types.match import Match, MatchingInput, MatchingOutput
from pipeline.types.user import User, UserId

RecentMatch = Match
RecentlyMatchedUsers = Set[UserId]

MatchingFunction = Callable[[List[User], List[RecentMatch]], Iterator[Match]]

MatchGenerator = Callable[[MatchingInput], Iterator[Match]]
MatchRanker = Callable[[MatchingInput, List[Match]], Iterator[Match]]
MatchFinalizer = MatchingFunction
