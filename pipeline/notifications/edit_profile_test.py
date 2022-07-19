import pytest

from pipeline.notifications import EditProfileNotifier
from pipeline.types import Match, MatchMetadata, Notification


def test_notification_logic():

    # This test verifies the behavior of the notifier w/ a simple case

    metadata = MatchMetadata(generator="commonLettersGenerator")
    match = Match(users={"A", "B"}, metadata=metadata)
    notification = Notification(match=match, last_msg_time=None)
    check_notifier = EditProfileNotifier()
    actual = check_notifier.verify_notification(notification)
    assert actual == True


def test_blank_generator():

    # This test verifies the behavior of the notifier if the generator is blank

    metadata = MatchMetadata(generator="blank")
    match = Match(users={"A", "B"}, metadata=metadata)
    notification = Notification(match=match, last_msg_time=None)
    check_notifier = EditProfileNotifier()
    actual = check_notifier.verify_notification(notification)
    assert actual == False
