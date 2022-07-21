from datetime import datetime

import pytest

from pipeline.notifications import NewMessageNotifier
from pipeline.types import ChatData, Match, Message, User


def test_check_msg_notifer():

    # This test verifies the behavior of the check message notifier w/ a standard 2-user match

    match = Match(users={"A", "B"})
    a_msg = Message(from_user="A", timestamp=datetime(2022, 7, 16))
    test_participants = {
        "A": User(uid="A", displayName="Ayman"),
        "B": User(uid="B", displayName="Brian"),
    }
    test_chatdata = ChatData(
        release_timestamp=datetime.now(),
        participants=test_participants,
        messages=[a_msg],
    )
    check_notifier = NewMessageNotifier()
    actual = check_notifier.get_users_to_notify(test_chatdata)
    assert actual == [User(uid="B", displayName="Brian")]


def test_more_users_in_match():

    # This test verifies the behavior of the check message notifier w/ an n-user match (where n > 2)

    match = Match(users={"A", "B", "C", "D", "E"})
    b_msg = Message(from_user="B", timestamp=datetime(2022, 7, 17))
    c_msg = Message(from_user="C", timestamp=datetime(2022, 7, 18))
    test_participants = {
        "A": User(uid="A", displayName="Ayman"),
        "B": User(uid="B", displayName="Brian"),
        "C": User(uid="C", displayName="Chris"),
        "D": User(uid="D", displayName="Dinora"),
        "E": User(uid="E", displayName="Erik"),
    }
    test_chatdata = ChatData(
        release_timestamp=datetime.now(),
        participants=test_participants,
        messages=[b_msg, c_msg],
    )
    check_notifier = NewMessageNotifier()
    actual = check_notifier.get_users_to_notify(test_chatdata)
    assert actual == [
        User(uid="A", displayName="Ayman"),
        User(uid="D", displayName="Dinora"),
        User(uid="E", displayName="Erik"),
    ]


def test_no_notification():

    # This test verifies the behavior of the check message notifier when there should be no users to notify

    match = Match(users={"A", "B"})
    a_msg = Message(from_user="A", timestamp=datetime(2022, 7, 16))
    b_msg = Message(from_user="B", timestamp=datetime(2022, 7, 17))
    test_participants = {
        "A": User(uid="A", displayName="Ayman"),
        "B": User(uid="B", displayName="Brian"),
    }
    test_chatdata = ChatData(
        release_timestamp=datetime.now(),
        participants=test_participants,
        messages=[a_msg, b_msg],
    )
    check_notifier = NewMessageNotifier()
    actual = check_notifier.get_users_to_notify(test_chatdata)
    assert actual == []