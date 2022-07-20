from dataclasses import dataclass

from pipeline.types.chat import ChatData
from pipeline.types.match import Match


@dataclass
class Notification:
    # relevant chat data between the users in the given match
    chatdata: ChatData


@dataclass
class NotificationInfo:
    # name of the notification sendee
    name: str = ""
    # email of the notification sendee
    email: str = ""
    # content of the notification
    content: str = ""
