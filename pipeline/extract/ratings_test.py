from unittest.mock import MagicMock

from pipeline.extract.ratings import extract_intent_upvotes, extract_match_stars
from pipeline.types import IntentUpvote, MatchStars


def test_extract_match_stars():
    # Mock database call so that test does not actually query a database
    raw_ratings = {
        "1": {
            "from_user": "A",
            "value": 3,
            "match": "aykl0021",
            "users": ["A", "B"],
            "generator": "testGenerator",
            "timestamp": 1,
        },
        # Skip this invalid record, it has a list of a list for `users`
        "2": {
            "from_user": "A",
            "value": 3,
            "match": "aykl0021",
            "users": [["A", "B"]],
            "generator": "testGenerator",
            "timestamp": 1,
        },
    }
    mock_get_ratings = MagicMock(return_value=raw_ratings)
    mock_db = MagicMock()
    mock_db.reference("ratings/match_stars/test").get = mock_get_ratings

    # Run Prefect task with mock
    actual: RawUserInterests = extract_match_stars.run(mock_db, "test")

    # Verify that database was queried once with no parameters
    mock_get_ratings.assert_called_once_with()

    # Verify that output matches expected type and content
    expected = [
        MatchStars(
            from_user="A",
            value=3,
            community="test",
            match="aykl0021",
            users={"A", "B"},
            generator="testGenerator",
            timestamp=1,
        )
    ]
    assert actual == expected


def test_extract_intent_upvotes():
    # Mock database call so that test does not actually query a database
    raw_ratings = {
        "1": {
            "from_user": "A",
            "to_user": "B",
            "value": 1,
            "intent": "tutoring",
            "match": "aykl0021",
            "users": ["A", "B"],
            "generator": "testGenerator",
            "timestamp": 1,
        }
    }
    mock_get_ratings = MagicMock(return_value=raw_ratings)
    mock_db = MagicMock()
    mock_db.reference("ratings/intent_upvotes/test").get = mock_get_ratings

    # Run Prefect task with mock
    actual: RawUserInterests = extract_intent_upvotes.run(mock_db, "test")

    # Verify that database was queried once with no parameters
    mock_get_ratings.assert_called_once_with()

    # Verify that output matches expected type and content
    expected = [
        IntentUpvote(
            from_user="A",
            to_user="B",
            value=1,
            intent="tutoring",
            community="test",
            match="aykl0021",
            users={"A", "B"},
            generator="testGenerator",
            timestamp=1,
        )
    ]
    assert actual == expected
