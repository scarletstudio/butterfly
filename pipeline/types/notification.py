import datetime
from dataclasses import dataclass, field
from enum import Enum
from typing import Set

from pipeline.types.chat import ChatData
from pipeline.types.match import Match
from pipeline.types.user import User


class NotificationType(Enum):
    # An enum representation of all the notification types devised so far; subject to change if more types are added
    CHECK_MATCH = "check_match"
    CHECK_MESSAGE = "check_message"
    RATE_MATCH = "rate_match"
    EDIT_PROFILE = "edit_profile"


@dataclass
class NotificationInput:
    # relevant chat data between the users in the given match
    chatdata: ChatData
    # datetime to inform Notifier class when pipeline is being run
    run_datetime: datetime.datetime


@dataclass(order=True)
class NotificationInfo:
    # the recipient of the notification, represented as a User object
    recipient: User
    # the type of notification
    notification_type: NotificationType
    # the names of the users who sent a message w/in a given match
    messagers: Set[str] = field(default_factory=set)
