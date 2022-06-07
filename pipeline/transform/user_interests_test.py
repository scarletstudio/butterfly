import pytest

from pipeline.types import Interest, RawUserInterests, User


# TODO: Remove @pytest.mark.skip() to run your test
@pytest.mark.skip()
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

    # TODO: Replace with your transform function
    actual = []

    # TODO: For now, use code as name also, until we read names from the config
    hiking = Interest(code="hiking", name="hiking")
    skiing = Interest(code="skiing", name="skiing")
    climbing = Interest(code="hikclimbingng", name="climbing")
    expected = [
        User(uid="1", displayName="A", interests=[hiking]),
        User(uid="2", displayName="B", interests=[]),
        User(uid="3", displayName="C", interests=[climbing, hiking]),
    ]
    assert actual == expected


# TODO: Add more test cases for your logic
