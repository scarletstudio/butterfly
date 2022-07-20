import datetime
from dataclasses import dataclass, field
from enum import Enum
from typing import Dict, List

from pipeline.types.community import Community
from pipeline.types.match_metadata import MatchMetadata
from pipeline.types.release import ReleaseTag
from pipeline.types.user import User, UserId

# ID for the match this chat is for, release tag plus match key
ChatMatchId = str


# Currently, the only type of message is a message with text content, but we may
# add more types of messages in the future.
class MessageType(Enum):
    MESSAGE = "MESSAGE"


@dataclass
class Message:
    # ID of user who sent the message
    from_user: UserId
    # Timestamp of when message was sent
    timestamp: datetime.datetime
    # Type of message
    message_type: MessageType = MessageType.MESSAGE
    # Content of message
    message: str = ""


@dataclass
class ChatData:
    # Timestamp representing when this chat and match go live, in milliseconds
    release_timestamp: datetime.datetime
    # ID for the match this chat is for
    chat_match_id: ChatMatchId = ""
    # ID of the community this match is part of
    community_id: Community = ""
    # Map of the IDs of users in this chat (and match) to their user data
    participants: Dict[UserId, User] = field(default_factory=dict)
    # Release tag that this chat and match are part of
    release_tag: ReleaseTag = ""
    # Title for this chat and match, if any
    title: str = ""
    # Custom metadata for the match this chat is for
    metadata: MatchMetadata = MatchMetadata()
    # Messages sent to the chat
    messages: List[Message] = field(default_factory=list)
