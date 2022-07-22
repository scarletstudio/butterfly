import pandas as pd

from pipeline.transform.users import convert_users_from_df
from pipeline.types import CommunityMembership, User


def test_convert_users_from_df():
    df = pd.DataFrame(
        [
            {"uid": "A", "displayName": "User A"},
            {"uid": "B", "displayName": "User B", "latestLogin": 20},
        ]
    )
    actual = convert_users_from_df.run(df)
    expected = [
        User(uid="A", displayName="User A"),
        User(uid="B", displayName="User B"),
    ]
    assert actual == expected


def test_convert_users_with_community_memberships_from_df():
    df = pd.DataFrame(
        [
            {"uid": "A", "communities": {"a": {"active": True, "joined": 123}}},
            {
                "uid": "B",
                "communities": {
                    "a": {"active": True, "joined": 456},
                    "b": {"active": False, "joined": 789},
                },
            },
        ]
    )
    actual = convert_users_from_df.run(df)
    expected = [
        User(
            uid="A",
            communities={"a": CommunityMembership(active=True, joined=123)},
        ),
        User(
            uid="B",
            communities={
                "a": CommunityMembership(active=True, joined=456),
                "b": CommunityMembership(active=False, joined=789),
            },
        ),
    ]
    assert actual == expected
