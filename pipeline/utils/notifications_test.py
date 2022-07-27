import pytest

from pipeline.types import NotificationInfo, NotificationType
from pipeline.utils.notifications import notifications_per_user


def test_return_lst_1_notification():
    notifications = [
        NotificationInfo(
            recipient="A",
            notification_type=NotificationType.CHECK_MATCH,
            messagers="B",
        )
        # NotificationInfo(recipient="B", notification_type=NotificationType.CHECK_MATCH, messagers="A")
    ]
    actual = notifications_per_user(notifications)
    expected = [
        NotificationInfo(
            recipient="A",
            notification_type=NotificationType.CHECK_MATCH,
            messagers="B",
        )
        # NotificationInfo(recipient="B", notification_type=NotificationType.CHECK_MATCH, messagers="A")
    ]

    assert actual == expected


# def test_return_lst_with_double_notifications():
#     notifications = [
#         NotificationInfo(recipient="A", notification_type=NotificationType.CHECK_MATCH)
#         NotificationInfo(recipient="B", notification_type=NotificationType.CHECK_MESSAGE)
#         NotificationInfo(recipient="C", notification_type=NotificationType.CHECK_MATCH)
#         NotificationInfo(recipient="B", notification_type=NotificationType.CHECK_MATCH)
#     ]
#     actual = notifications_per_user(notifications)
#     expected = [
#         NotificationInfo(recipient="A", notification_type=NotificationType.CHECK_MATCH)
#         NotificationInfo(recipient="B", notification_type=NotificationType.CHECK_MESSAGE)
#         NotificationInfo(recipient="C", notification_type=NotificationType.CHECK_MATCH)
#     ]

#     assert actual == expected
