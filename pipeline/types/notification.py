import datetime
from dataclasses import dataclass

from pipeline.types.chat import ChatData
from pipeline.types.match import Match


@dataclass
class NotificationInput:
    # relevant chat data between the users in the given match
    chatdata: ChatData
    # datetime to inform Notifier class when pipeline is being run
    run_datetime: datetime.datetime
    # the type of notification
    notification_type: str = ""


@dataclass
class NotificationInfo:
    # name of the notification sendee
    name: str = ""
    # email of the notification sendee
    email: str = ""
    # subject line of the email
    title: str = ""
    # content of the notification
    content: str = ""
