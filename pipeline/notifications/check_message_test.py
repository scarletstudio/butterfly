from datetime import datetime

import pytest

from pipeline.notifications import CheckMessageNotifier
from pipeline.types import Match, Notification


def test_notification_logic():

    # This test verifies the behavior of the notifier w/ a simple case

    match = Match(users={"A", "B"})
    test_datetime = datetime(2022, 7, 16)
    test_timedelta = datetime.now() - test_datetime
    notification = Notification(match=match, last_msg_time=test_timedelta)
    check_notifier = CheckMessageNotifier()
    actual = check_notifier.verify_notification(notification)
    assert actual == True


def test_time_less_than_1_day():

    # This test verifies the behavior of the notifier if last messaged time is less than a day

    match = Match(users={"A", "B"})
    test_timedelta = datetime.now() - datetime.now()
    notification = Notification(match=match, last_msg_time=test_timedelta)
    check_notifier = CheckMessageNotifier()
    actual = check_notifier.verify_notification(notification)
    assert actual == False
