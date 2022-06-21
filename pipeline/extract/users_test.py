from unittest.mock import MagicMock

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

    # Verify that users with null latestLogin were filtered out
    expected = [{"uid": "2", "latestLogin": 100}]
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
    expected = [
        {"uid": "2", "latestLogin": 100},
        {"uid": "6", "latestLogin": 100},
        {"uid": "7", "latestLogin": 100},
    ]
    assert actual == expected
