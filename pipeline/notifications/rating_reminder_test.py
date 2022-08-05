import pytest

from pipeline.notifications import RatingReminderNotifier
from pipeline.types import (
    ChatData,
    Match,
    Message,
    NotificationInfo,
    NotificationInput,
    NotificationType,
    User,
)

"""
def test_example():
    first_msg = Message(from_user="1", timestamp=datetime(2022, 7, 31))
    second_msg = Message(from_user="2", timestamp=datetime(2022, 7, 31))
    third_msg = Message(from_user="1", timestamp=datetime(2022, 7, 31))

    chatdataInput = ChatData(
        release_timestamp=datetime(2022,7,31),
        participants= {
            "1": User(uid="1", displayName="Goku"),
            "2": User(uid="2", displayName="Bri"),
        },
        messages=[first_msg,second_msg,third_msg],
    )

    inp = NotificationInput(
        chatdata=chatdataInput,
        run_datetime=datetime(2022,7,31),
    )


    checkNotifier = RatingReminderNotifier()
    actual = checkNotifier.get_notifications(inp)

    expected = [
        NotificationInfo(
            recipient=User(uid="1"),
            notification_type=NotificationType.RATE_MATCH,

        ),
         NotificationInfo(
            recipient=User(uid="2"),
            notification_type=NotificationType.RATE_MATCH,
        ),
    ]
    assert actual == expected
"""
