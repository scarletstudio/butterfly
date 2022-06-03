import datetime
import pandas as pd
from unittest.mock import MagicMock
from pipeline.load.release import delete_previous_release, upload_matches


MS = 1000
TS_2022_04_01 = datetime.datetime(2022, 4, 1).timestamp() * MS
DT_2022_03_31 = datetime.datetime(2022, 3, 31)
DT_2022_04_02 = datetime.datetime(2022, 4, 2)


def test_upload_matches_per_user_for_current_release():
    # Mock database call so that test does not actually query a database
    mock_update_matches = MagicMock()
    mock_db = MagicMock()
    mock_db.reference("matches").update = mock_update_matches

    default_match = {"title": None, "community": "test"}
    matches = [
        {
            **default_match,
            "key": "1",
            "release": "2022-04-01",
            "users": {"A", "B"},
        },
        {
            **default_match,
            "key": "2",
            "release": "2022-04-07",
            "users": {"C", "D"},
        },
    ]

    # Run Prefect task with mock
    upload_matches.run(
        mock_db,
        pd.DataFrame(matches),
        community="test",
        load_release_tag="2022-04-01",
        force=True,
    )

    # Verify that output contains one record per user per match
    # Verify that output skips records with a different release tag from the run
    expected = {
        "test/2022-04-01~1~A": {
            "id": "2022-04-01~1",
            "for": "A",
            "participants": {"A": True, "B": True},
            "release_tag": "2022-04-01",
            "release_timestamp": TS_2022_04_01,
            "title": None,
        },
        "test/2022-04-01~1~B": {
            "id": "2022-04-01~1",
            "for": "B",
            "participants": {"A": True, "B": True},
            "release_tag": "2022-04-01",
            "release_timestamp": TS_2022_04_01,
            "title": None,
        },
    }
    # Verify that the expected data was sent to the database
    mock_update_matches.assert_called_once_with(expected)


def test_upload_matches_skip_without_force():
    # Mock database call so that test does not actually query a database
    mock_db = MagicMock()

    # Prepare inputs for task
    matches = [
        {
            "title": None,
            "community": "test",
            "key": "1",
            "release": "2022-04-01",
            "users": {"A", "B"},
        },
    ]

    # Run Prefect task with mock
    upload_matches.run(
        mock_db,
        pd.DataFrame(matches),
        community="test",
        load_release_tag="2022-04-01",
    )

    # Verify that database is never called
    mock_db.assert_not_called()


def test_delete_previous_release():
    # Prepare data for mock query responses
    matches = {
        "2022-04-01~1~A": {
            "id": "2022-04-01~1",
            "for": "A",
            "participants": {"A": True, "B": True},
            "release_tag": "2022-04-01",
            "release_timestamp": TS_2022_04_01,
            "title": None,
        },
        "2022-04-01~1~B": {
            "id": "2022-04-01~1",
            "for": "B",
            "participants": {"A": True, "B": True},
            "release_tag": "2022-04-01",
            "release_timestamp": TS_2022_04_01,
            "title": None,
        },
    }

    # Mock database calls so that test does not actually query a database
    mock_db = MagicMock()
    # Note: MagicMock does not consider different arguments to chained calls as
    # different calls, so we have to create a separate mock for each reference
    mock_ref = {
        "matches/test": MagicMock(),
        "messages/test": MagicMock(),
    }
    mock_db.reference = MagicMock(side_effect=lambda path: mock_ref[path])

    mock_get_matches = MagicMock(return_value=matches)
    mock_ref["matches/test"].order_by_child("release_tag").equal_to(
        "2022-04-01"
    ).get = mock_get_matches

    mock_delete_matches = MagicMock()
    mock_ref["matches/test"].update = mock_delete_matches

    mock_delete_chats = MagicMock()
    mock_ref["messages/test"].update = mock_delete_chats

    # Run Prefect task with mock
    delete_previous_release.run(
        mock_db,
        community="test",
        release_tag="2022-04-01",
        now=DT_2022_03_31,
        force=True,
    )

    # Verify that database was queried once with no parameters
    mock_get_matches.assert_called_once_with()

    # Verify that expected matches were deleted
    expected_matches_to_delete = {
        "2022-04-01~1~A": None,
        "2022-04-01~1~B": None,
    }
    mock_delete_matches.assert_called_once_with(expected_matches_to_delete)

    # Verify that expected chats were deleted
    expected_chats_to_delete = {
        "2022-04-01~1": None,
    }
    mock_delete_chats.assert_called_once_with(expected_chats_to_delete)


def test_delete_previous_release_always_delete_future_release():
    # Prepare data for mock query responses
    matches = {
        "2022-04-01~1~A": {
            "id": "2022-04-01~1",
            "for": "A",
            "participants": {"A": True, "B": True},
            "release_tag": "2022-04-01",
            "release_timestamp": TS_2022_04_01,
            "title": None,
        },
        "2022-04-01~1~B": {
            "id": "2022-04-01~1",
            "for": "B",
            "participants": {"A": True, "B": True},
            "release_tag": "2022-04-01",
            "release_timestamp": TS_2022_04_01,
            "title": None,
        },
    }

    # Mock database calls so that test does not actually query a database
    mock_db = MagicMock()
    # Note: MagicMock does not consider different arguments to chained calls as
    # different calls, so we have to create a separate mock for each reference
    mock_ref = {
        "matches/test": MagicMock(),
        "messages/test": MagicMock(),
    }
    mock_db.reference = MagicMock(side_effect=lambda path: mock_ref[path])

    mock_get_matches = MagicMock(return_value=matches)
    mock_ref["matches/test"].order_by_child("release_tag").equal_to(
        "2022-04-01"
    ).get = mock_get_matches

    mock_delete_matches = MagicMock()
    mock_ref["matches/test"].update = mock_delete_matches

    mock_delete_chats = MagicMock()
    mock_ref["messages/test"].update = mock_delete_chats

    # Run Prefect task with mock
    # Note: Even though force is not set to True, this task will still run the
    # delete operation because the release tag is in the future
    delete_previous_release.run(
        mock_db,
        community="test",
        release_tag="2022-04-01",
        now=DT_2022_03_31,
    )

    # Verify that database was queried once with no parameters
    mock_get_matches.assert_called_once_with()

    # Verify that expected matches were deleted
    expected_matches_to_delete = {
        "2022-04-01~1~A": None,
        "2022-04-01~1~B": None,
    }
    mock_delete_matches.assert_called_once_with(expected_matches_to_delete)

    # Verify that expected chats were deleted
    expected_chats_to_delete = {
        "2022-04-01~1": None,
    }
    mock_delete_chats.assert_called_once_with(expected_chats_to_delete)


def test_delete_previous_release_skip_delete_past_release_without_force():
    # Mock database calls so that test does not actually query a database
    mock_db = MagicMock()
    mock_db.reference = MagicMock()

    # Run Prefect task with mock
    delete_previous_release.run(
        mock_db,
        community="test",
        release_tag="2022-04-01",
        now=DT_2022_04_02,
    )

    # Verify that database is never called
    mock_db.reference.assert_not_called()
