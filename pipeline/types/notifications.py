from dataclasses import dataclass

from pipeline.types.chat import ChatData
from pipeline.types.match import Match


@dataclass
class Notification:
    # a single match of n-users (where n >= 2)
    match: Match
    # relevant chat data between the users in the given match
    chatdata: ChatData
