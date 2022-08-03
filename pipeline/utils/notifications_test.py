import pytest

from pipeline.testing import equal_lists
from pipeline.types import NotificationInfo, NotificationType, User
from pipeline.utils.notifications import (
    notifications_per_user,
    priority_notifications_per_user,
)


def test_return_lst_1_notification():
    notifications = [
        NotificationInfo(
            recipient=User(uid="A"),
            notification_type=NotificationType.CHECK_MATCH,
        )
    ]
    actual = notifications_per_user(notifications)
    expected = [
        NotificationInfo(
            recipient=User(uid="A"),
            notification_type=NotificationType.CHECK_MATCH,
        )
    ]

    assert actual == expected


def test_return_lst_with_double_notifications():
    notifications = [
        NotificationInfo(
            recipient=User(uid="A"),
            notification_type=NotificationType.CHECK_MATCH,
        ),
        NotificationInfo(
            recipient=User(uid="B"),
            notification_type=NotificationType.CHECK_MATCH,
        ),
        NotificationInfo(
            recipient=User(uid="C"),
            notification_type=NotificationType.CHECK_MATCH,
        ),
        NotificationInfo(
            recipient=User(uid="B"),
            notification_type=NotificationType.CHECK_MATCH,
        ),
    ]
    actual = notifications_per_user(notifications)
    expected = [
        NotificationInfo(
            recipient=User(uid="A"),
            notification_type=NotificationType.CHECK_MATCH,
        ),
        NotificationInfo(
            recipient=User(uid="B"),
            notification_type=NotificationType.CHECK_MATCH,
        ),
        NotificationInfo(
            recipient=User(uid="C"),
            notification_type=NotificationType.CHECK_MATCH,
        ),
    ]

    assert equal_lists(actual, expected)


def test_return_prioritized_notif_for_one_user():
    notifications = [
        NotificationInfo(
            recipient=User(uid="A"),
            notification_type=NotificationType.RATE_MATCH,
        ),
        NotificationInfo(
            recipient=User(uid="B"),
            notification_type=NotificationType.CHECK_MATCH,
        ),
        NotificationInfo(
            recipient=User(uid="C"),
            notification_type=NotificationType.CHECK_MATCH,
        ),
        NotificationInfo(
            recipient=User(uid="B"),
            notification_type=NotificationType.CHECK_MESSAGE,
        ),
    ]
    actual = priority_notifications_per_user(notifications)
    expected = [
        NotificationInfo(
            recipient=User(uid="A"),
            notification_type=NotificationType.RATE_MATCH,
        ),
        NotificationInfo(
            recipient=User(uid="B"),
            notification_type=NotificationType.CHECK_MESSAGE,
        ),
        NotificationInfo(
            recipient=User(uid="C"),
            notification_type=NotificationType.CHECK_MATCH,
        ),
    ]

    assert equal_lists(actual, expected)


# def test_return_prioritized_notif_for_one_user():
#     notifications = [
#         NotificationInfo(
#             recipient=User(uid="A"),
#             notification_type=NotificationType.RATE_MATCH,
#         ),
#         NotificationInfo(
#             recipient=User(uid="B"),
#             notification_type=NotificationType.CHECK_MATCH,
#         ),
#         NotificationInfo(
#             recipient=User(uid="C"),
#             notification_type=NotificationType.CHECK_MATCH,
#         ),
#         NotificationInfo(
#             recipient=User(uid="B"),
#             notification_type=NotificationType.CHECK_MESSAGE,
#         ),
#     ]
#     actual = priority_notifications_per_user(notifications)
#     expected = [
#         NotificationInfo(
#             recipient=User(uid="A"),
#             notification_type=NotificationType.RATE_MATCH,
#         ),
#         NotificationInfo(
#             recipient=User(uid="B"),
#             notification_type=NotificationType.CHECK_MESSAGE,
#         ),
#         NotificationInfo(
#             recipient=User(uid="C"),
#             notification_type=NotificationType.CHECK_MATCH,
#         ),
#     ]

#     assert equal_lists(actual, expected)
