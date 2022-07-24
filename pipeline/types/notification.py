import datetime
from dataclasses import dataclass, field
from enum import Enum
from typing import List

from pipeline.types.chat import ChatData
from pipeline.types.match import Match
from pipeline.types.user import User


class NotificationType(Enum):
    # An enum representation of all the notification types devised so far; subject to change if more types are added
    CHECK_MATCH = "New_match"
    CHECK_MSG = "New_message"
    RATE_MATCH = "Rate_match"
    EDIT_PROFILE = "Edit_profile"


@dataclass
class NotificationInput:
    # relevant chat data between the users in the given match
    chatdata: ChatData
    # the type of notification
    notification_type: NotificationType
    # datetime to inform Notifier class when pipeline is being run
    run_datetime: datetime.datetime


@dataclass
class NotificationInfo:
    # the recipient of the notification, represented as a User object
    recipient: User
    # the names of the users who sent a message w/in a given match
    messagers: List[str] = field(default_factory=list)
