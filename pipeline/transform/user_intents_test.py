import pytest

from pipeline.types import Intent, RawUserIntents, Side, User


# TODO: Remove @pytest.mark.skip() to run your test
@pytest.mark.skip()
def test_example():
    users = [User(uid="1", displayName="A"), User(uid="2", displayName="B")]
    raw: RawUserIntents = {
        "1": {"tutoring": {"seeking": True}, "comedy": {"seeking": False}},
        "2": {"tutoring": {"seeking": True, "giving": True}},
    }

    # TODO: Replace with your transform function
    actual = []

    # TODO: For now, use code as name also, until we read names from the config
    seek_tutoring = Intent(code="tutoring", name="tutoring", side=Side.SEEKING)
    give_tutoring = Intent(code="tutoring", name="tutoring", side=Side.GIVING)
    expected = [
        User(uid="1", displayName="A", intents=[seek_tutoring]),
        User(uid="2", displayName="B", intents=[seek_tutoring, give_tutoring]),
    ]
    assert actual == expected


# TODO: Add more test cases for your logic
