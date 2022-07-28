from django.test import Client

from backend.testing import assert_response_match, with_mock_db
from backend.utils import format_json


@with_mock_db
def test_update_invalid_attribute(mock_db):
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

    expected = format_json(status=200, message="Logged.")
    print(actual.content)
    assert_response_match(actual, expected)
    mock_db.assert_not_called()
