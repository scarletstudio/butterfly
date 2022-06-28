import json
from unittest.mock import MagicMock

import pytest
from django.test import Client

from backend.testing import assert_response_match, with_mock_db
from backend.utils import format_json

# Test cases for getting user attributes
GET_ATTRIBUTE_TESTS = {
    "basic_interests": {
        "attribute": "interests",
        "database": {"hiking": True, "biking": False},
        "attributes": [
            {"code": "hiking", "data": True},
            {"code": "biking", "data": False},
        ],
    },
    "basic_intents": {
        "attribute": "intents",
        "database": {
            "tutoring": {"seeking": True},
            "shows": {"seeking": False, "giving": True},
        },
        "attributes": [
            {"code": "tutoring", "data": {"seeking": True}},
            {"code": "shows", "data": {"seeking": False, "giving": True}},
        ],
    },
}

# Test cases for updating user attributes
UPDATE_ATTRIBUTE_TESTS = {
    "add_interest": {
        "attribute": "interests",
        "code": "hiking",
        "update": True,
        "expected": {"success": True},
        "did_update": True,
    },
    "remove_interest": {
        "attribute": "interests",
        "code": "biking",
        "update": False,
        "expected": {"success": True},
        "did_update": True,
    },
    "invalid_interest_not_bool": {
        "attribute": "interests",
        "code": "biking",
        "update": 12,  # Not a boolean
        "expected": {"status": 400, "error": "Invalid data for interests."},
        "did_update": False,
    },
    "add_intent": {
        "attribute": "intents",
        "code": "tutoring",
        "update": {"seeking": True},
        "expected": {"success": True},
        "did_update": True,
    },
    "remove_intent": {
        "attribute": "intents",
        "code": "tutoring",
        # Note: This unit test mocks the database, but the real Firebase will
        # merge update data with existing data, so if the user already has
        # {"giving": True} for this intent, this update will add
        # {"seeking": False} without deleting or modifiying the giving key
        "update": {"seeking": False},
        "expected": {"success": True},
        "did_update": True,
    },
    "invalid_intent_not_dict": {
        "attribute": "intents",
        "code": "tutoring",
        "update": True,  # Not a dictionary
        "expected": {"status": 400, "error": "Invalid data for intents."},
        "did_update": False,
    },
    "invalid_intent_not_dict_of_bool": {
        "attribute": "intents",
        "code": "tutoring",
        "update": {"seeking": 12},  # Not a dictionary of booleans
        "expected": {"status": 400, "error": "Invalid data for intents."},
        "did_update": False,
    },
    "invalid_intent_invalid_side": {
        "attribute": "intents",
        "code": "tutoring",
        "update": {"providing": True},  # Not a dictionary of side keys
        "expected": {"status": 400, "error": "Invalid data for intents."},
        "did_update": False,
    },
}


@with_mock_db
@pytest.mark.parametrize("test_key", GET_ATTRIBUTE_TESTS.keys())
def test_get_attribute(mock_db, test_key):
    test_data = GET_ATTRIBUTE_TESTS[test_key]
    attribute = test_data["attribute"]
    mock_get = MagicMock(return_value=test_data["database"])
    mock_db.reference(f"attributes/{attribute}/test/andrew").get = mock_get

    c = Client()
    community = "test"
    uid = "andrew"
    actual = c.get(f"/attributes/community/{community}/users/{uid}/{attribute}")

    expected = format_json(attributes=test_data["attributes"])
    assert_response_match(actual, expected)
    mock_get.assert_called_once_with()


@with_mock_db
def test_get_invalid_attribute(mock_db):
    c = Client()
    community = "test"
    uid = "andrew"
    actual = c.get(f"/attributes/community/{community}/users/{uid}/hype-factor")

    expected = format_json(status=405, error="Invalid attribute: hype-factor")
    assert_response_match(actual, expected)
    mock_db.assert_not_called()


@with_mock_db
def test_get_missing_user(mock_db):
    mock_get = MagicMock(return_value=None)
    mock_db.reference(f"attributes/interests/test/andrew").get = mock_get

    c = Client()
    community = "test"
    uid = "andrew"
    actual = c.get(f"/attributes/community/{community}/users/{uid}/interests")

    expected = format_json(attributes=[])
    assert_response_match(actual, expected)
    mock_get.assert_called_once_with()


@with_mock_db
@pytest.mark.parametrize("test_key", UPDATE_ATTRIBUTE_TESTS.keys())
def test_update_attribute(mock_db, test_key):
    test_data = UPDATE_ATTRIBUTE_TESTS[test_key]
    attribute = test_data["attribute"]
    mock_update = MagicMock()
    ref = f"attributes/{attribute}/test/andrew"
    mock_db.reference(ref).update = mock_update

    c = Client()
    community = "test"
    uid = "andrew"
    code = test_data["code"]
    url = f"/attributes/community/{community}/users/{uid}/{attribute}/{code}"
    data = {"update": json.dumps(test_data["update"])}
    actual = c.post(url, data)

    expected = format_json(**test_data["expected"])
    assert_response_match(actual, expected)
    if test_data["did_update"]:
        mock_update.assert_called_once_with(test_data["update"])
    else:
        mock_update.assert_not_called()


@with_mock_db
def test_update_invalid_attribute(mock_db):
    c = Client()
    community = "test"
    uid = "andrew"
    actual = c.post(f"/attributes/community/{community}/users/{uid}/hype/123")

    expected = format_json(status=405, error="Invalid attribute: hype")
    assert_response_match(actual, expected)
    mock_db.assert_not_called()


@with_mock_db
def test_update_missing_user(mock_db):
    mock_update = MagicMock()
    ref = f"attributes/interests/test/andrew/hiking"
    mock_db.reference(ref).update = mock_update

    c = Client()
    community = "test"
    uid = "andrew"
    url = f"/attributes/community/{community}/users/{uid}/interests/hiking"
    data = {"update": json.dumps(True)}
    actual = c.post(url, data)

    # There is no check for missing users, so the update will be created anyway
    expected = format_json(success=True)
    assert_response_match(actual, expected)
    mock_update.assert_called_once_with(True)
