from datetime import datetime

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


# test when it is saturday to notify users
def test_correct_date():
    first_msg = Message(from_user="1", timestamp=datetime(2022, 7, 30))
    second_msg = Message(from_user="2", timestamp=datetime(2022, 7, 30))
    third_msg = Message(from_user="1", timestamp=datetime(2022, 7, 30))

    chatdataInput = ChatData(
        release_timestamp=datetime(2022, 7, 30),
        participants={
            "1": User(uid="1", displayName="Goku"),
            "2": User(uid="2", displayName="Bri"),
        },
        messages=[first_msg, second_msg, third_msg],
    )

    inp = NotificationInput(
        chatdata=chatdataInput,
        run_datetime=datetime(2022, 7, 30),
    )

    checkNotifier = RatingReminderNotifier()
    actual = checkNotifier.get_notifications(inp)

    expected = [
        NotificationInfo(
            recipient=User(uid="1", displayName="Goku"),
            notification_type=NotificationType.RATE_MATCH,
        ),
        NotificationInfo(
            recipient=User(uid="2", displayName="Bri"),
            notification_type=NotificationType.RATE_MATCH,
        ),
    ]
    assert actual == expected


# test where the date is not a saturday so users will not be notified
def test_invalid_date():
    first_msg = Message(from_user="1", timestamp=datetime(2022, 7, 28))
    second_msg = Message(from_user="2", timestamp=datetime(2022, 7, 28))
    third_msg = Message(from_user="1", timestamp=datetime(2022, 7, 28))

    chatdataInput = ChatData(
        release_timestamp=datetime(2022, 7, 28),
        participants={
            "1": User(uid="1", displayName="Goku"),
            "2": User(uid="2", displayName="Bri"),
        },
        messages=[first_msg, second_msg, third_msg],
    )

    inp = NotificationInput(
        chatdata=chatdataInput,
        run_datetime=datetime(2022, 7, 28),
    )

    checkNotifier = RatingReminderNotifier()
    actual = checkNotifier.get_notifications(inp)

    expected = []
    assert actual == expected


# test less than three msgs (it should not be consired a conversation)
def test_min_msgs():
    first_msg = Message(from_user="1", timestamp=datetime(2022, 7, 30))
    second_msg = Message(from_user="2", timestamp=datetime(2022, 7, 30))

    chatdataInput = ChatData(
        release_timestamp=datetime(2022, 7, 30),
        participants={
            "1": User(uid="1", displayName="Goku"),
            "2": User(uid="2", displayName="Bri"),
        },
        messages=[first_msg, second_msg],
    )

    inp = NotificationInput(
        chatdata=chatdataInput,
        run_datetime=datetime(2022, 7, 30),
    )

    checkNotifier = RatingReminderNotifier()
    actual = checkNotifier.get_notifications(inp)

    expected = []
    assert actual == expected
