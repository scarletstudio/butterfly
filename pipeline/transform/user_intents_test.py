import pytest

from pipeline.transform import augment_users_with_intents
from pipeline.types import Intent, RawUserIntents, Side, User


def test_example():
    users = [User(uid="1", displayName="A"), User(uid="2", displayName="B")]
    raw: RawUserIntents = {
        "1": {"tutoring": {"seeking": True}, "comedy": {"seeking": False}},
        "2": {"tutoring": {"seeking": True, "giving": True}},
    }

    actual = augment_users_with_intents(users, raw)

    # TODO: For now, use code as name also, until we read names from the config
    seek_tutoring = Intent(code="tutoring", name="tutoring", side=Side.SEEKING)
    give_tutoring = Intent(code="tutoring", name="tutoring", side=Side.GIVING)
    expected = [
        User(uid="1", displayName="A", intents=[seek_tutoring]),
        User(uid="2", displayName="B", intents=[seek_tutoring, give_tutoring]),
    ]
    # TODO: Uncomment this assertion and delete the users assert
    # assert actual == expected
    assert actual == users


# TODO: Add more test cases for your logic
