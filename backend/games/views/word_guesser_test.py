from unittest.mock import MagicMock

from django.test import Client

from backend.testing import assert_response_match, with_mock_db
from backend.utils import format_json


@with_mock_db
def test_submit_one_guess(mock_db):
    mock_set = MagicMock()
    mock_db.reference("games/wordguesser/test").set = mock_set

    c = Client()
    game_id = "test"
    url = f"/games/wordguesser/{game_id}/guess"
    data = {"word": "hatch"}
    actual = c.post(url, data, content_type="application/json")

    expected = format_json(status=200, message="Guess submitted successfully.")
    assert_response_match(actual, expected)

    # TODO: The goal word is not deterministic, so we are not able to verify
    # the results data, but we can verify that the database set is called.
    mock_set.assert_called()


@with_mock_db
def test_submit_many_guesses(mock_db):
    mock_set = MagicMock()
    mock_db.reference("games/wordguesser/test").set = mock_set

    c = Client()
    game_id = "test"
    url = f"/games/wordguesser/{game_id}/guess"

    actual1 = c.post(url, {"word": "break"}, content_type="application/json")
    actual2 = c.post(url, {"word": "boink"}, content_type="application/json")

    expected = format_json(status=200, message="Guess submitted successfully.")
    assert_response_match(actual1, expected)
    assert_response_match(actual2, expected)

    # TODO: The goal word is not deterministic, so we are not able to verify
    # the results data, but we can verify that the database sets are called.
    assert len(mock_set.mock_calls) == 2
