from datetime import datetime

import pytest

from pipeline.notifications import NewMessageNotifier
from pipeline.types import (
    ChatData,
    Match,
    Message,
    NotificationInfo,
    NotificationInput,
    NotificationType,
    User,
)


def test_check_msg_notifer():

    # This test verifies the behavior of the check message notifier w/ a standard 2-user match

    match = Match(users={"A", "B"})
    a_msg = Message(from_user="A", timestamp=datetime(2022, 7, 16))
    test_participants = {
        "A": User(uid="A", displayName="Ayman", email="ayman@iit.edu"),
        "B": User(uid="B", displayName="Brian", email="brian@iit.edu"),
    }
    test_chatdata = ChatData(
        release_timestamp=datetime.now(),
        participants=test_participants,
        messages=[a_msg],
    )
    test_notif_inp = NotificationInput(
        chatdata=test_chatdata,
        run_datetime=datetime.now(),
    )
    check_notifier = NewMessageNotifier()
    actual = check_notifier.get_notifications(test_notif_inp)
    assert actual == [
        NotificationInfo(
            recipient=User(uid="B", displayName="Brian", email="brian@iit.edu"),
            notification_type=NotificationType.CHECK_MESSAGE,
            messagers={"Ayman"},
        )
    ]


def test_more_users_in_match():

    # This test verifies the behavior of the check message notifier w/ an n-user match (where n > 2)

    match = Match(users={"A", "B", "C", "D", "E"})
    b_msg = Message(from_user="B", timestamp=datetime(2022, 7, 17))
    c_msg = Message(from_user="C", timestamp=datetime(2022, 7, 18))
    test_participants = {
        "A": User(uid="A", displayName="Ayman", email="ayman@iit.edu"),
        "B": User(uid="B", displayName="Brian", email="brian@iit.edu"),
        "C": User(uid="C", displayName="Chris", email="chris@iit.edu"),
        "D": User(uid="D", displayName="Dinora", email="dinora@iit.edu"),
        "E": User(uid="E", displayName="Erik", email="erik@iit.edu"),
    }
    test_chatdata = ChatData(
        release_timestamp=datetime.now(),
        participants=test_participants,
        messages=[b_msg, c_msg],
    )
    test_notif_inp = NotificationInput(
        chatdata=test_chatdata,
        run_datetime=datetime.now(),
    )
    check_notifier = NewMessageNotifier()
    actual = check_notifier.get_notifications(test_notif_inp)
    assert actual == [
        NotificationInfo(
            recipient=User(uid="A", displayName="Ayman", email="ayman@iit.edu"),
            notification_type=NotificationType.CHECK_MESSAGE,
            messagers={"Brian", "Chris"},
        ),
        NotificationInfo(
            recipient=User(
                uid="D", displayName="Dinora", email="dinora@iit.edu"
            ),
            notification_type=NotificationType.CHECK_MESSAGE,
            messagers={"Brian", "Chris"},
        ),
        NotificationInfo(
            recipient=User(uid="E", displayName="Erik", email="erik@iit.edu"),
            notification_type=NotificationType.CHECK_MESSAGE,
            messagers={"Brian", "Chris"},
        ),
    ]


def test_no_notification():

    # This test verifies the behavior of the check message notifier when there should be no users to notify

    match = Match(users={"A", "B"})
    a_msg = Message(from_user="A", timestamp=datetime(2022, 7, 16))
    b_msg = Message(from_user="B", timestamp=datetime(2022, 7, 17))
    test_participants = {
        "A": User(uid="A", displayName="Ayman", email="ayman@iit.edu"),
        "B": User(uid="B", displayName="Brian", email="brian@iit.edu"),
    }
    test_chatdata = ChatData(
        release_timestamp=datetime.now(),
        participants=test_participants,
        messages=[a_msg, b_msg],
    )
    test_notif_inp = NotificationInput(
        chatdata=test_chatdata,
        run_datetime=datetime.now(),
    )
    check_notifier = NewMessageNotifier()
    actual = check_notifier.get_notifications(test_notif_inp)
    assert actual == []
