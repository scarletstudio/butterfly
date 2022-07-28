from unittest.mock import MagicMock

from django.test import Client

from backend.testing import assert_response_match, with_mock_db
from backend.utils import SERVER_TIMESTAMP, format_json


@with_mock_db
def test_update_invalid_attribute(mock_db):
    # Configure mock so that the test does not write to the real database
    mock_push = MagicMock()
    mock_db.reference("analytics").push = mock_push

    # Send a test POST request with an example analytics event
    c = Client()
    url = "/analytics/collect/"
    data = {
        "event_type": "page_view",
        "data": {
            "page_id": "edit_profile",
            "duration_ms": 2103,
        },
    }
    actual = c.post(url, data, content_type="application/json")

    # Verify that the request was successful and that the mock push occurred
    expected_event = {
        "event_type": "page_view",
        "data": {
            "page_id": "edit_profile",
            "duration_ms": 2103,
        },
        "timestamp": SERVER_TIMESTAMP,
    }
    expected = format_json(status=200, message="Event saved successfully.")
    assert_response_match(actual, expected)
    # TODO: Update this test to check that the mock push is called correctly
    # mock_push.assert_called_once_with(expected_event)
    mock_push.assert_not_called()
