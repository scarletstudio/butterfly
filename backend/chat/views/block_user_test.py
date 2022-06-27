from unittest.mock import MagicMock

from django.http import HttpResponseNotFound
from django.test import Client

from backend.testing import assert_response_match, with_mock_db
from backend.utils import SERVER_TIMESTAMP, format_json


@with_mock_db
def test_get_blocked_users_for_user(mock_db):
    mock_get = MagicMock(
        return_value={
            "shrek": {"blocked": True, "updated": 1},
            "dragon": {"blocked": False, "updated": 2},
        }
    )
    mock_db.reference("trust/blocks/donkey").get = mock_get

    c = Client()
    uid_from = "donkey"
    actual = c.get(f"/chat/block/user/{uid_from}")

    expected = format_json(
        blocks=[
            {"uid": "shrek", "blocked": True, "updated": 1},
            {"uid": "dragon", "blocked": False, "updated": 2},
        ]
    )
    assert_response_match(actual, expected)
    mock_get.assert_called_once_with()


@with_mock_db
def test_get_no_blocked_users(mock_db):
    mock_get = MagicMock(return_value=None)
    mock_db.reference("trust/blocks/shrek").get = mock_get

    c = Client()
    uid_from = "shrek"
    actual = c.get(f"/chat/block/user/{uid_from}")

    expected = format_json(blocks=[])
    assert_response_match(actual, expected)
    mock_get.assert_called_once_with()


@with_mock_db
def test_block_user(mock_db):
    mock_update = MagicMock()
    mock_db.reference("trust/blocks/donkey").update = mock_update

    c = Client()
    uid_from = "donkey"
    uid_to = "shrek"
    actual = c.post(f"/chat/block/user/{uid_from}/{uid_to}/true")

    expected = format_json(message="User is now blocked.")
    assert_response_match(actual, expected)
    mock_update.assert_called_once_with(
        {
            "shrek": {
                "blocked": True,
                "updated": SERVER_TIMESTAMP,
            }
        }
    )


@with_mock_db
def test_unblock_user(mock_db):
    mock_update = MagicMock()
    mock_db.reference("trust/blocks/donkey").update = mock_update

    c = Client()
    uid_from = "donkey"
    uid_to = "shrek"
    actual = c.post(f"/chat/block/user/{uid_from}/{uid_to}/false")

    expected = format_json(message="User is now unblocked.")
    assert_response_match(actual, expected)
    mock_update.assert_called_once_with(
        {
            "shrek": {
                "blocked": False,
                "updated": SERVER_TIMESTAMP,
            }
        }
    )


@with_mock_db
def test_bad_block_url(mock_db):
    mock_update = MagicMock()
    mock_db.reference("trust/blocks/donkey").update = mock_update

    c = Client()
    uid_from = ""
    uid_to = ""
    actual = c.post(f"/chat/block/user/{uid_from}/{uid_to}/true")

    assert isinstance(actual, HttpResponseNotFound)
    mock_update.assert_not_called()
