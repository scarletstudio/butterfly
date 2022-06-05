import dataclasses
from typing import List

import pandas as pd
import prefect
from prefect import task

from pipeline.matching.utils import generate_keys
from pipeline.types import Community, Match, ReleaseTag


class MissingReleaseTagException(Exception):
    pass


@task
def convert_matches_from_df(df: pd.DataFrame) -> List[Match]:
    cols = set(df.columns)
    field_names = [f.name for f in dataclasses.fields(Match) if f.name in cols]
    user_dicts = df[field_names].to_dict(orient="records")
    return [Match(**u) for u in user_dicts]


@task
def filter_recent_matches(
    matches: List[Match], release: ReleaseTag
) -> List[Match]:
    """Filter to only include matches from before the current release."""
    logger = prefect.context.get("logger")
    logger.info(f"Read {len(matches)} matches.")
    if any([m.release is None for m in matches]):
        msg = "Match release tag missing."
        logger.warning(msg)
        raise MissingReleaseTagException(msg)
    is_past_release = lambda m: m.release < release  # ignore: type
    recent = list(filter(is_past_release, matches))
    logger.info(f"Filtered to {len(recent)} recent matches.")
    return recent


@task
def transform_matches_for_load(
    matches: List[Match], community: Community, release: ReleaseTag
) -> pd.DataFrame:
    logger = prefect.context.get("logger")
    df = pd.DataFrame(matches)
    df["community"] = community
    df["release"] = release
    df["key"] = generate_keys(n=len(matches))
    df["title"] = "Your Match"
    logger.info("Returned {} rows, {} cols.".format(*df.shape))
    return df
