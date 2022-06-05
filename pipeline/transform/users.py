import dataclasses
from typing import List

import pandas as pd
from prefect import task

from pipeline.types import User


@task
def convert_users_from_df(df: pd.DataFrame) -> List[User]:
    cols = set(df.columns)
    field_names = [f.name for f in dataclasses.fields(User) if f.name in cols]
    user_dicts = df[field_names].to_dict(orient="records")
    return [User(**u) for u in user_dicts]
