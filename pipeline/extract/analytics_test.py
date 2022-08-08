from datetime import datetime
from typing import List
from unittest.mock import MagicMock

from pipeline.extract.analytics import extract_analytics
from pipeline.types import AnalyticsEvent


def test_extract_analytics():
    # Mock database call so that test does not actually query a database
    raw_analytics = {
        "1": {
            "data": {"user": "abc"},
            "event_type": "view_chat_inbox",
            "timestamp": 1659311549216,
            "host": "localhost",
            "page_url": "/butterfly/me",
        }
    }
    mock_get_analytics = MagicMock(return_value=raw_analytics)
    mock_db = MagicMock()
    mock_db.reference("analytics").get = mock_get_analytics

    # Run Prefect task with mock
    actual: List[AnalyticsEvent] = extract_analytics.run(mock_db)

    # Verify that database was queried once with no parameters
    mock_get_analytics.assert_called_once_with()

    # Verify that output matches expected type and content
    expected: List[AnalyticsEvent] = [
        AnalyticsEvent(
            event_type="view_chat_inbox",
            data={"user": "abc"},
            timestamp=datetime.fromtimestamp(1659311549216 // 1000),
            host="localhost",
            page_url="/butterfly/me",
        )
    ]

    assert actual == expected
