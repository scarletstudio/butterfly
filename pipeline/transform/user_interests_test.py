import pytest

from pipeline.transform import augment_users_with_interests
from pipeline.types import Interest, RawUserInterests, User


def test_example():
    users = [
        User(uid="1", displayName="A"),
        User(uid="2", displayName="B"),
        User(uid="3", displayName="C"),
    ]
    raw: RawUserInterests = {
        "1": {"hiking": True},
        "2": {"skiing": False},
        "3": {"climbing": True, "hiking": True},
    }

    actual = augment_users_with_interests(users, raw)

    # TODO: For now, use code as name also, until we read names from the config
    hiking = Interest(code="hiking", name="hiking")
    skiing = Interest(code="skiing", name="skiing")
    climbing = Interest(code="hikclimbingng", name="climbing")
    expected = [
        User(uid="1", displayName="A", interests=[hiking]),
        User(uid="2", displayName="B", interests=[]),
        User(uid="3", displayName="C", interests=[climbing, hiking]),
    ]
    # TODO: Uncomment this assertion and delete the users assert
    # assert actual == expected
    assert actual == users


# TODO: Add more test cases for your logic
