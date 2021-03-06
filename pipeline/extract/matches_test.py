from unittest.mock import MagicMock

from pipeline.extract.matches import extract_recent_matches


def test_extract_recent_matches_converts_user_match_records_to_match_records():
    # Mock database call so that test does not actually query a database
    default_record = {"title": None}
    matches = {
        "1~A": {
            **default_record,
            "id": "1",
            "participants": ["A", "B"],
            "release_tag": "2022-04-01",
        },
        "1~B": {
            **default_record,
            "id": "1",
            "participants": ["B", "A"],
            "release_tag": "2022-04-01",
        },
        "2~C": {
            **default_record,
            "id": "2",
            "participants": ["C", "D"],
            "release_tag": "2022-04-07",
            "metadata": {"score": 1.25},
        },
        "2~D": {
            **default_record,
            "id": "2",
            "participants": ["D", "C"],
            "release_tag": "2022-04-07",
            "metadata": {"score": 1.25},
        },
    }
    mock_get_matches = MagicMock(return_value=matches)
    mock_db = MagicMock()
    mock_db.reference("matches/test").get = mock_get_matches

    # Run Prefect task with mock
    actual_df = extract_recent_matches.run(mock_db, "test")
    actual = actual_df.to_dict(orient="records")

    # Verify that database was queried once with no parameters
    mock_get_matches.assert_called_once_with()

    # Verify that only one record per match is returned
    default_expected = {"title": None, "community": "test", "metadata": {}}
    expected = [
        {
            **default_expected,
            "key": "1",
            "users": {"A", "B"},
            "release": "2022-04-01",
        },
        {
            **default_expected,
            "key": "2",
            "users": {"C", "D"},
            "release": "2022-04-07",
            "metadata": {"score": 1.25},
        },
    ]
    assert actual == expected


def test_extract_recent_matches_no_match_records():
    mock_get_matches = MagicMock(return_value=None)
    mock_db = MagicMock()
    mock_db.reference("matches/test").get = mock_get_matches

    actual_df = extract_recent_matches.run(mock_db, "test")
    actual = actual_df.to_dict(orient="records")

    mock_get_matches.assert_called_once_with()
    expected = []
    assert actual == expected
