import pytest

from pipeline.notifications import CheckMatchNotifier
from pipeline.types import Match, Notification


def test_notification_logic():

    # This test verifies the behavior of the notifier w/ a simple case

    match = Match(users={"A", "B"})
    notification = Notification(match=match, last_msg_time=None)
    check_notifier = CheckMatchNotifier()
    actual = check_notifier.verify_notification(notification)
    assert actual == True


def test_match_with_less_than_2_users():

    # This test verifies the behavior of the notifier if there's less than 2 users in a match

    match = Match(users={"A"})
    notification = Notification(match, last_msg_time=None)
    check_notifier = CheckMatchNotifier()
    actual = check_notifier.verify_notification(notification)
    assert actual == False
