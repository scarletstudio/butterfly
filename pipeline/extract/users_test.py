from unittest.mock import MagicMock

import numpy as np

from pipeline.extract.users import extract_users


def test_extract_users_excludes_users_with_null_latest_login():
    # Mock database call so that test does not actually query a database
    active_membership = {"communities": {"test": {"active": True}}}
    users = {
        "1": {"uid": "1", **active_membership},
        "2": {"uid": "2", "latestLogin": 100, **active_membership},
    }
    mock_get_users = MagicMock(return_value=users)
    mock_db = MagicMock()
    mock_db.reference("users").get = mock_get_users

    # Run Prefect task with mock
    actual_df = extract_users.run(mock_db, "test")
    actual = actual_df.to_dict(orient="records")

    # Verify that database was queried once with no parameters
    mock_get_users.assert_called_once_with()

    # Verify that users with null latest login were filtered out
    expected_active_membership = {
        "is_active": True,
        "communities": {"test": {"active": True}},
    }
    expected = [{"uid": "2", "latest_login": 100, **expected_active_membership}]
    assert actual == expected


def test_extract_users_excludes_users_without_active_membership():
    # Mock database call so that test does not actually query a database
    no_communities = {}
    no_membership = {"communities": {}}
    missing_membership = {"communities": {"test": {}}}
    active_membership = {"communities": {"test": {"active": True}}}
    inactive_membership = {"communities": {"test": {"active": False}}}
    different_membership = {"communities": {"something": {"active": True}}}
    many_memberships = {
        "communities": {"something": {"active": True}, "test": {"active": True}}
    }
    users = {
        "1": {"uid": "1", "latestLogin": 100, **no_membership},
        "2": {"uid": "2", "latestLogin": 100, **active_membership},
        "3": {"uid": "3", "latestLogin": 100, **different_membership},
        "4": {"uid": "4", "latestLogin": 100, **inactive_membership},
        "5": {"uid": "5", "latestLogin": 100, **missing_membership},
        "6": {"uid": "6", "latestLogin": 100, **active_membership},
        "7": {"uid": "7", "latestLogin": 100, **many_memberships},
        "8": {"uid": "8", "latestLogin": 100, **no_membership},
    }
    mock_get_users = MagicMock(return_value=users)
    mock_db = MagicMock()
    mock_db.reference("users").get = mock_get_users

    # Run Prefect task with mock
    actual_df = extract_users.run(mock_db, "test")
    actual = actual_df.to_dict(orient="records")

    # Verify that database was queried once with no parameters
    mock_get_users.assert_called_once_with()

    # Verify that only users with active memberships in the community remain
    expected_active_membership = {
        "is_active": True,
        "communities": {"test": {"active": True}},
    }
    expected_many_memberships = {
        "is_active": True,
        "communities": {
            "something": {"active": True},
            "test": {"active": True},
        },
    }
    expected = [
        {"uid": "2", "latest_login": 100, **expected_active_membership},
        {"uid": "6", "latest_login": 100, **expected_active_membership},
        {"uid": "7", "latest_login": 100, **expected_many_memberships},
    ]
    assert actual == expected


def test_extract_users_renames_and_retains_fields():
    active_membership = {
        "latestLogin": 100,
        "communities": {"test": {"active": True}},
    }
    users = {
        "1": {"uid": "1", "photoURL": "meme.png", **active_membership},
        "2": {"uid": "2", "somethingElse": "yo", **active_membership},
    }
    mock_get_users = MagicMock(return_value=users)
    mock_db = MagicMock()
    mock_db.reference("users").get = mock_get_users

    actual_df = extract_users.run(mock_db, "test")
    actual = actual_df.to_dict(orient="records")

    mock_get_users.assert_called_once_with()

    expected_active_membership = {
        "latest_login": 100,
        "is_active": True,
        "communities": {"test": {"active": True}},
    }
    expected = [
        # These fields get renamed because they are specified in the config
        {
            "uid": "1",
            "photo_url": "meme.png",
            "somethingElse": np.nan,
            **expected_active_membership,
        },
        # These fields do not get renamed, but are still retained
        {
            "uid": "2",
            "photo_url": np.nan,
            "somethingElse": "yo",
            **expected_active_membership,
        },
    ]
    assert actual == expected
