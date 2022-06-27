from unittest.mock import MagicMock

from django.test import Client

from backend.testing import assert_response_match
from backend.utils import format_json


def test_block_user():
    c = Client()
    uid_from = "donkey"
    uid_to = "shrek"
    actual = c.post(f"/chat/block/user/{uid_from}/{uid_to}")

    expected = format_json(message="Not yet implemented.")
    assert_response_match(actual, expected)
