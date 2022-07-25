import pytest

from pipeline.transform import augment_users_with_intents
from pipeline.types import Intent, RawUserIntents, Side, User


def test_example():
    users = [User(uid="1", displayName="A"), User(uid="2", displayName="B")]
    raw: RawUserIntents = {
        "1": {"tutoring": {"seeking": True}, "comedy": {"seeking": False}},
        "2": {"tutoring": {"seeking": True, "giving": True}},
    }

    actual = augment_users_with_intents.run(users, raw)

    # TODO: For now, use code as name also, until we read names from the config
    seek_tutoring = Intent(code="tutoring", name="tutoring", side=Side.SEEKING)
    give_tutoring = Intent(code="tutoring", name="tutoring", side=Side.GIVING)
    expected = [
        User(uid="1", displayName="A", intents=[seek_tutoring]),
        User(uid="2", displayName="B", intents=[seek_tutoring, give_tutoring]),
    ]
    assert actual == expected


def test_user_no_intents():
    users = [User(uid="1", displayName="A"), User(uid="2", displayName="B")]
    # users 1 and 2 have no raw intents
    raw: RawUserIntents = {
        "3": {"tutoring": {"seeking": True}, "comedy": {"seeking": False}},
        "4": {"tutoring": {"seeking": True, "giving": True}},
    }

    actual = augment_users_with_intents.run(users, raw)

    expected = [
        User(uid="1", displayName="A", intents=[]),
        User(uid="2", displayName="B", intents=[]),
    ]
    assert actual == expected
