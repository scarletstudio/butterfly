from unittest.mock import MagicMock

from django.test import Client

from backend.testing import assert_response_match, with_mock_db
from backend.utils import SERVER_TIMESTAMP, format_json


@with_mock_db
def test_join_community_first_community(mock_db):
    mock_get = MagicMock(return_value={"uid": "spriha"})
    mock_db.reference("users/spriha").get = mock_get
    mock_set = MagicMock()
    mock_db.reference("users/spriha/communities/test").set = mock_set

    c = Client()
    community = "test"
    uid = "spriha"
    actual = c.post(f"/core/community/{community}/join/{uid}")

    expected = format_json(message="Successfully joined the community!")
    # User is not in any other communities, set them active here.
    expected_post = {"active": True, "joined": SERVER_TIMESTAMP}
    assert_response_match(actual, expected)
    mock_get.assert_called_once_with()
    mock_set.assert_called_once_with(expected_post)


@with_mock_db
def test_join_community_already_active_in_other_community(mock_db):
    mock_get = MagicMock(
        return_value={"uid": "spriha", "communities": {"abc": {"active": True}}}
    )
    mock_db.reference("users/spriha").get = mock_get
    mock_set = MagicMock()
    mock_db.reference("users/spriha/communities/test").set = mock_set

    c = Client()
    community = "test"
    uid = "spriha"
    actual = c.post(f"/core/community/{community}/join/{uid}")

    expected = format_json(message="Successfully joined the community!")
    # User is already active in another community, set them inactive here.
    expected_post = {"active": False, "joined": SERVER_TIMESTAMP}
    assert_response_match(actual, expected)
    mock_get.assert_called_once_with()
    mock_set.assert_called_once_with(expected_post)


@with_mock_db
def test_join_community_inactive_in_other_communities(mock_db):
    mock_get = MagicMock(
        return_value={
            "uid": "spriha",
            "communities": {"abc": {"active": False}},
        }
    )
    mock_db.reference("users/spriha").get = mock_get
    mock_set = MagicMock()
    mock_db.reference("users/spriha/communities/test").set = mock_set

    c = Client()
    community = "test"
    uid = "spriha"
    actual = c.post(f"/core/community/{community}/join/{uid}")

    expected = format_json(message="Successfully joined the community!")
    # User is in another community, but inactive, set them active here.
    expected_post = {"active": True, "joined": SERVER_TIMESTAMP}
    assert_response_match(actual, expected)
    mock_get.assert_called_once_with()
    mock_set.assert_called_once_with(expected_post)


@with_mock_db
def test_join_community_already_joined(mock_db):
    mock_get = MagicMock(
        return_value={
            "uid": "spriha",
            "communities": {"test": {"active": True}},
        }
    )
    mock_db.reference("users/spriha").get = mock_get
    mock_set = MagicMock()
    mock_db.reference("users/spriha/communities/test").set = mock_set

    c = Client()
    community = "test"
    uid = "spriha"
    actual = c.post(f"/core/community/{community}/join/{uid}")

    expected = format_json(message="Already joined this community.")
    assert_response_match(actual, expected)
    mock_get.assert_called_once_with()
    # User already joined this community, do not update their data.
    mock_set.assert_not_called()
