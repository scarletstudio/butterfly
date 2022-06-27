from dataclasses import dataclass
from typing import Literal, Set

from pipeline.types.community import Community
from pipeline.types.intent import IntentCode
from pipeline.types.match import MatchKey
from pipeline.types.match_metadata import GeneratorId
from pipeline.types.user import UserId

# Ordinal scale from 1 (worst) to 5 (best), 0 if missing
StarsValue = Literal[0, 1, 2, 3, 4, 5]
# Currently an upvote is a single positive value, 0 if missing
UpvoteValue = Literal[0, 1]


@dataclass
class MatchStars:
    # ID of the user who gave the rating
    from_user: UserId
    # Number of stars given
    value: StarsValue
    # Community of the match this rating is for
    community: Community
    # Key of the match this rating is for
    match: MatchKey
    # Users in the match, including the user who gave the rating
    users: Set[UserId]
    # ID of the generator that proposed the match
    generator: GeneratorId


@dataclass
class IntentUpvote:
    # ID of the user who gave the upvote
    from_user: UserId
    # ID of the user being upvoted
    to_user: UserId
    # Value of the upvote
    value: UpvoteValue
    # Code for the intent the user is being upvoted for
    intent: IntentCode
    # Community of the match this rating is for
    community: Community
    # Key of the match this upvote is for
    match: MatchKey
    # Users in the match, including the user who gave the upvote
    users: Set[UserId]
    # ID of the generator that proposed the match
    generator: GeneratorId
