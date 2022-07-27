import pytest

from pipeline.types import NotificationInfo, NotificationType
from pipeline.utils.notifications import notifications_per_user


def test_return_lst_notifications():
    notifications = [
        NotificationInfo(recipient="A", notification_type=CHECK_MATCH)
        # NotificationInfo(recipient="B", notification_type=CHECK_MESSAGE)
        # NotificationInfo(recipient="C", notification_type=RATE_MATCH)
    ]
    actual = notifications_per_user(notifications)
    expected = [
        NotificationInfo(recipient="A", notification_type=CHECK_MATCH)
        # NotificationInfo(recipient="B", notification_type=CHECK_MESSAGE)
        # NotificationInfo(recipient="C", notification_type=RATE_MATCH)
    ]

    assert actual == expected
