import pandas as pd

from pipeline.transform.users import convert_users_from_df
from pipeline.types import User


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
