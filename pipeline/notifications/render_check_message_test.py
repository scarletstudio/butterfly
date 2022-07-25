import pytest

from pipeline.notifications import NewMessageRender
from pipeline.types import NotificationInfo, NotificationType, User


def test_check_msg_render():

    # This test verifies the behavior of the check message render w/ a simple NotificationInfo obj

    test_notif_info = NotificationInfo(
        recipient=User(uid="A", displayName="Ayman", email="ayman@iit.edu"),
        notification_type=NotificationType.CHECK_MESSAGE,
        messagers=["Chris"],
    )
    test_render = NewMessageRender()
    actual = test_render.render(inp=test_notif_info)
    expected = "Hi Ayman. You have a new message(s) from Chris."
    assert actual == expected


def test_check_more_msgs():

    # This test verifies the behavior of the check message render w/ more messages in the NotificationInfo obj

    test_notif_info = NotificationInfo(
        recipient=User(uid="A", displayName="Ayman", email="ayman@iit.edu"),
        notification_type=NotificationType.CHECK_MESSAGE,
        messagers=["Chris", "Dinora", "Erik"],
    )
    test_render = NewMessageRender()
    actual = test_render.render(inp=test_notif_info)
    expected = (
        "Hi Ayman. You have a new message(s) from Chris, Dinora, and Erik."
    )
    assert actual == expected


def test_notification_type_mismatch():

    # This test verifies the behavior of the check message render given an incorrect notification type for the render

    test_notif_info = NotificationInfo(
        recipient=User(uid="A", displayName="Ayman", email="ayman@iit.edu"),
        notification_type=NotificationType.RATE_MATCH,
        messagers=["Chris"],
    )
    test_render = NewMessageRender()
    actual = test_render.render(inp=test_notif_info)
    expected = "Renderer does not support this type of notification."
    assert actual == expected
