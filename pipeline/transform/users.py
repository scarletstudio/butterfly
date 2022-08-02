import dataclasses
from typing import List

import pandas as pd
from prefect import task

from pipeline.types import (
    CommunityMembership,
    RawUserCommunityMemberships,
    User,
    UserCommunityMemberships,
)


def parse_user_community_memberships(
    raw: RawUserCommunityMemberships,
) -> UserCommunityMemberships:
    return {
        community_id: CommunityMembership(**membership)
        for community_id, membership in raw.items()
    }


@task
def convert_users_from_df(df: pd.DataFrame) -> List[User]:
    cols = set(df.columns)
    # Parse raw community membership records into dataclasses
    if "communities" in df.columns:
        df.communities = df.communities.apply(parse_user_community_memberships)
    field_names = [f.name for f in dataclasses.fields(User) if f.name in cols]
    user_dicts = df[field_names].to_dict(orient="records")
    return [User(**u) for u in user_dicts]
