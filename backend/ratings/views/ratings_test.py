from unittest.mock import MagicMock

import pytest
from django.http import HttpResponse, JsonResponse
from django.test import Client

from backend.testing import assert_response_match, with_mock_db
from backend.utils import SERVER_TIMESTAMP, format_json

# Test cases for creating rating records
CREATE_RATING_TESTS = {
    "basic_match_stars": {
        "url": "/ratings/match_stars",
        "path": "ratings/match_stars/test",
        "body": {
            "from_user": "yoda",
            "value": 3,
            "community": "test",
            "match": "abcd1234",
            "users": ["yoda", "kenobi", "windu"],
            "generator": "jediGenerator",
        },
        "expected": format_json(message="Rating successfully submitted."),
        "push": {
            "from_user": "yoda",
            "value": 3,
            "community": "test",
            "match": "abcd1234",
            "users": ["yoda", "kenobi", "windu"],
            "generator": "jediGenerator",
            "timestamp": SERVER_TIMESTAMP,
        },
    },
    "invalid_value_match_stars": {
        "url": "/ratings/match_stars",
        "path": "ratings/match_stars/test",
        "body": {
            "from_user": "yoda",
            "value": 6,
            "community": "test",
            "match": "abcd1234",
            "users": ["yoda", "kenobi", "windu"],
            "generator": "jediGenerator",
        },
        "expected": format_json(status=400, error="Invalid rating value: 6"),
        "push": None,
    },
    "missing_field_match_stars": {
        "url": "/ratings/match_stars",
        "path": "ratings/match_stars/test",
        "body": {
            "from_user": "yoda",
            "value": 5,
            "community": "test",
            # Missing "match" field
            "users": ["yoda", "kenobi", "windu"],
            "generator": "jediGenerator",
        },
        "expected": HttpResponse(status=422),
        "push": None,
    },
    "basic_intent_upvote": {
        "url": "/ratings/intent_upvote",
        "path": "ratings/intent_upvote/test",
        "body": {
            "from_user": "yoda",
            "to_user": "windu",
            "value": 1,
            "intent": "lightsaber-training",
            "community": "test",
            "match": "abcd1234",
            "users": ["yoda", "kenobi", "windu"],
            "generator": "jediGenerator",
        },
        "expected": format_json(message="Rating successfully submitted."),
        "push": {
            "from_user": "yoda",
            "to_user": "windu",
            "value": 1,
            "intent": "lightsaber-training",
            "community": "test",
            "match": "abcd1234",
            "users": ["yoda", "kenobi", "windu"],
            "generator": "jediGenerator",
            "timestamp": SERVER_TIMESTAMP,
        },
    },
    "invalid_value_intent_upvote": {
        "url": "/ratings/intent_upvote",
        "path": "ratings/intent_upvote/test",
        "body": {
            "from_user": "yoda",
            "to_user": "windu",
            "value": 2,
            "intent": "lightsaber-training",
            "community": "test",
            "match": "abcd1234",
            "users": ["yoda", "kenobi", "windu"],
            "generator": "jediGenerator",
        },
        "expected": format_json(status=400, error="Invalid rating value: 2"),
        "push": None,
    },
    "missing_field_intent_upvote": {
        "url": "/ratings/intent_upvote",
        "path": "ratings/intent_upvote/test",
        "body": {
            "from_user": "yoda",
            "to_user": "windu",
            "value": 1,
            # Missing "intent" field
            "community": "test",
            "match": "abcd1234",
            "users": ["yoda", "kenobi", "windu"],
            "generator": "jediGenerator",
        },
        "expected": HttpResponse(status=422),
        "push": None,
    },
}


@with_mock_db
@pytest.mark.parametrize("test_key", CREATE_RATING_TESTS.keys())
def test_rate_match_stars(mock_db, test_key):
    test_data = CREATE_RATING_TESTS[test_key]
    mock_push = MagicMock()
    mock_db.reference(test_data["path"]).push = mock_push

    c = Client()
    url = test_data["url"]
    body = test_data["body"]
    actual = c.post(url, test_data["body"], content_type="application/json")

    expected = test_data["expected"]
    if isinstance(expected, JsonResponse):
        assert_response_match(actual, expected)
    elif isinstance(expected, HttpResponse):
        assert isinstance(actual, HttpResponse)
        assert actual.status_code == expected.status_code
    else:
        assert False, "Unexpected expected response type."
    if test_data.get("push", None):
        mock_push.assert_called_once_with(test_data["push"])
    else:
        mock_push.assert_not_called()
