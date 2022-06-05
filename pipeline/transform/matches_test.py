import pandas as pd

from pipeline.transform.matches import (
    convert_matches_from_df,
    filter_recent_matches,
)
from pipeline.types import Match


def test_convert_matches_from_df():
    df = pd.DataFrame([{"users": {"A", "B"}, "extraData": "ignore"}])
    actual = convert_matches_from_df.run(df)
    expected = [Match(users={"A", "B"})]
    assert actual == expected


def test_filter_recent_matches():
    matches = [
        Match(users={"A", "B"}, release="2022-03-12"),
        Match(users={"A", "B"}, release="2022-03-13"),
        Match(users={"A", "B"}, release="2022-03-14"),
    ]
    actual = filter_recent_matches.run(matches, release="2022-03-13")
    expected = [Match(users={"A", "B"}, release="2022-03-12")]
    assert actual == expected
