from unittest.mock import MagicMock

from pipeline.extract.users import extract_users


def test_extract_users_excludes_users_with_null_latest_login():
    # Mock database call so that test does not actually query a database
    users = {
        "1": {"uid": "1"},
        "2": {"uid": "2", "latestLogin": 100},
    }
    mock_get_users = MagicMock(return_value=users)
    mock_db = MagicMock()
    mock_db.reference("users").get = mock_get_users

    # Run Prefect task with mock
    actual_df = extract_users.run(mock_db, "test")
    actual = actual_df.to_dict(orient="records")

    # Verify that database was queried once with no parameters
    mock_get_users.assert_called_once_with()

    # Verify that users with null latestLogin were filtered out
    expected = [{"uid": "2", "latestLogin": 100}]
    assert actual == expected
