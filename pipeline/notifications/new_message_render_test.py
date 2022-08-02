import pytest

from pipeline.notifications import NewMessageRender
from pipeline.notifications.render_notification import (
    InvalidNotificationTypeException,
)
from pipeline.types import NotificationInfo, NotificationType, User


def test_check_msg_render():

    # This test verifies the behavior of the new message render w/ a simple NotificationInfo obj

    test_notif_info = NotificationInfo(
        recipient=User(uid="A", displayName="Ayman", email="ayman@iit.edu"),
        notification_type=NotificationType.CHECK_MESSAGE,
        messagers=["Chris"],
    )
    test_renderer = NewMessageRender()
    actual = test_renderer.render(info=test_notif_info)
    expected = "Hi Ayman. You have a new message(s) from Chris."
    assert actual == expected


def test_check_more_msgs():

    # This test verifies the behavior of the new message render w/ more messagers in the NotificationInfo obj

    test_notif_info = NotificationInfo(
        recipient=User(uid="A", displayName="Ayman", email="ayman@iit.edu"),
        notification_type=NotificationType.CHECK_MESSAGE,
        messagers=["Chris", "Dinora", "Erik"],
    )
    test_renderer = NewMessageRender()
    actual = test_renderer.render(info=test_notif_info)
    expected = (
        "Hi Ayman. You have a new message(s) from Chris, Dinora, and Erik."
    )
    assert actual == expected


def test_notification_type_mismatch():

    # This test verifies the behavior of the new message render given an incorrect notification type for the render

    test_notif_info = NotificationInfo(
        recipient=User(uid="A", displayName="Ayman", email="ayman@iit.edu"),
        notification_type=NotificationType.RATE_MATCH,
        messagers=["Chris"],
    )
    test_renderer = NewMessageRender()
    with pytest.raises(
        InvalidNotificationTypeException, match="only supports CHECK_MESSAGE"
    ) as exc_info:
        actual = test_renderer.render(info=test_notif_info)
    assert (
        exc_info.value.args[0]
        == "This renderer only supports CHECK_MESSAGE notifications."
    )
