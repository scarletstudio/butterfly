from django.test import Client

from backend.testing import assert_response_match, with_mock_db
from backend.utils import format_json


def test_hello():
    c = Client()
    actual = c.get("/")

    expected = format_json(message="Hello! The backend is up and running.")
    assert_response_match(actual, expected)
