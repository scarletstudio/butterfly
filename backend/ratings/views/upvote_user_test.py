from unittest.mock import MagicMock

from django.test import Client

from backend.testing import assert_response_match
from backend.utils import format_json


def test_rate_intent_upvote():
    c = Client()
    actual = c.post("/ratings/intent_upvote")

    expected = format_json(message="Not yet implemented.")
    assert_response_match(actual, expected)
