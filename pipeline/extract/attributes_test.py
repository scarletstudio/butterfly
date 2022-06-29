from unittest.mock import MagicMock

from pipeline.extract.attributes import extract_intents, extract_interests
from pipeline.types import RawUserIntents, RawUserInterests


def test_extract_interests():
    # Mock database call so that test does not actually query a database
    raw_interests = {
        "1": {"hiking": True, "swimming": True},
        "2": {"reading": True, "hiking": False},
    }
    mock_get_interests = MagicMock(return_value=raw_interests)
    mock_db = MagicMock()
    mock_db.reference("attributes/interests/test").get = mock_get_interests

    # Run Prefect task with mock
    actual: RawUserInterests = extract_interests.run(mock_db, "test")

    # Verify that database was queried once with no parameters
    mock_get_interests.assert_called_once_with()

    # Verify that output matches expected type and content
    expected: RawUserInterests = {
        "1": {"hiking": True, "swimming": True},
        "2": {"reading": True, "hiking": False},
    }
    assert actual == expected


def test_extract_intents():
    # Mock database call so that test does not actually query a database
    raw_intents = {
        "1": {"tutoring": {"seeking": True}},
        "2": {"comedy": {"seeking": True, "giving": True}},
        "3": {"comedy": {"giving": False}},
    }
    mock_get_intents = MagicMock(return_value=raw_intents)
    mock_db = MagicMock()
    mock_db.reference("attributes/intents/test").get = mock_get_intents

    # Run Prefect task with mock
    actual: RawUserIntents = extract_intents.run(mock_db, "test")

    # Verify that database was queried once with no parameters
    mock_get_intents.assert_called_once_with()

    # Verify that output matches expected type and content
    expected: RawUserIntents = {
        "1": {"tutoring": {"seeking": True}},
        "2": {"comedy": {"seeking": True, "giving": True}},
        "3": {"comedy": {"giving": False}},
    }
    assert actual == expected


def test_extract_interests_no_data():
    # Mock database call so that test does not actually query a database
    mock_get_interests = MagicMock(return_value=None)
    mock_db = MagicMock()
    mock_db.reference("attributes/interests/test").get = mock_get_interests

    # Run Prefect task with mock
    actual: RawUserInterests = extract_interests.run(mock_db, "test")

    # Verify that database was queried once with no parameters
    mock_get_interests.assert_called_once_with()

    # Verify that output matches expected type and content
    expected: RawUserInterests = {}
    assert actual == expected


def test_extract_intents_no_data():
    # Mock database call so that test does not actually query a database
    mock_get_intents = MagicMock(return_value=None)
    mock_db = MagicMock()
    mock_db.reference("attributes/intents/test").get = mock_get_intents

    # Run Prefect task with mock
    actual: RawUserIntents = extract_intents.run(mock_db, "test")

    # Verify that database was queried once with no parameters
    mock_get_intents.assert_called_once_with()

    # Verify that output matches expected type and content
    expected: RawUserIntents = {}
    assert actual == expected
