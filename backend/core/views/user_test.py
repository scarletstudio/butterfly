from unittest.mock import MagicMock

from django.test import Client

from backend.testing import assert_response_match, with_mock_db
from backend.utils import format_json


@with_mock_db
def test_get_user_by_id(mock_db):
    mock_get = MagicMock(return_value={"displayName": "Erik"})
    mock_db.reference("users/erik").get = mock_get

    c = Client()
    uid = "erik"
    actual = c.get(f"/core/user/{uid}")

    expected = format_json(data={"displayName": "Erik"})
    assert_response_match(actual, expected)
    mock_get.assert_called_once_with()


@with_mock_db
def test_no_user_found(mock_db):
    mock_get = MagicMock(return_value=None)
    mock_db.reference("users/derik").get = mock_get

    c = Client()
    uid = "derik"
    actual = c.get(f"/core/user/{uid}")

    expected = format_json(success=False, message="No user for ID: derik")
    assert_response_match(actual, expected)
    mock_get.assert_called_once_with()
