from typing import Callable, List, Set

from pipeline.schema.match import Match
from pipeline.schema.user import User, UserId

RecentMatches = List[Match]
OutputMatches = List[Match]
MatchingFunction = Callable[[List[User], RecentMatches], OutputMatches]

RecentlyMatchedUsers = Set[UserId]
