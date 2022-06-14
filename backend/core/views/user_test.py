from unittest.mock import MagicMock

from django.http import JsonResponse

from backend.core.views.user import view_user
from backend.testing import assert_json_response_match, run_view_with_db
from backend.utils import format_json


def test_get_user_by_id():
    mock_res = MagicMock(return_value={"displayName": "Erik"})
    mock_db = MagicMock()
    mock_db.reference("users/erik").get = mock_res
    actual = run_view_with_db(view_user, mock_db, None, "erik")

    expected = format_json(data={"displayName": "Erik"})
    assert_json_response_match(actual, expected)


def test_no_user_found():
    mock_res = MagicMock(return_value=None)
    mock_db = MagicMock()
    mock_db.reference("users/derik").get = mock_res
    actual = run_view_with_db(view_user, mock_db, None, "derik")

    expected = format_json(success=False, message="No user for ID: derik")
    assert_json_response_match(actual, expected)
