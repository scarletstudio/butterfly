from unittest.mock import MagicMock

from django.test import Client

from backend.testing import assert_response_match, with_mock_db
from backend.utils import format_json


@with_mock_db
def test_submit_one_guess(mock_db):
    # TODO: Validate mock database calls
    mock_update = MagicMock()
    mock_db.reference("games/wordguesser/test").update = mock_update

    c = Client()
    game_id = "test"
    url = f"/games/wordguesser/{game_id}/guess"
    data = {"word": "hatch"}
    actual = c.post(url, data, content_type="application/json")

    expected = format_json(status=200, message="Guess submitted successfully.")
    assert_response_match(actual, expected)
    mock_update.assert_not_called()


@with_mock_db
def test_submit_many_guesses(mock_db):
    # TODO: Validate mock database calls
    mock_update = MagicMock()
    mock_db.reference("games/wordguesser/test").update = mock_update

    c = Client()
    game_id = "test"
    url = f"/games/wordguesser/{game_id}/guess"

    actual1 = c.post(url, {"word": "break"}, content_type="application/json")
    actual2 = c.post(url, {"word": "boink"}, content_type="application/json")

    expected = format_json(status=200, message="Guess submitted successfully.")
    assert_response_match(actual1, expected)
    assert_response_match(actual2, expected)
    mock_update.assert_not_called()
