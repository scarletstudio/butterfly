import sys

sys.path.append("./")

import datetime

import firebase_admin
import pandas as pd
import prefect
from firebase_admin import credentials, db
from prefect import Flow, Parameter, task
from prefect.tasks.core.constants import Constant
from prefect.tasks.secrets import PrefectSecret

from pipeline.extract.matches import extract_recent_matches
from pipeline.extract.users import extract_users
from pipeline.load.release import delete_previous_release, upload_matches
from pipeline.matching.algorithms.fallback import (
    compute_fallback_matches,
    get_fallback_matches,
)
from pipeline.matching.core.release import from_release_tag, to_release_tag
from pipeline.schema.match import Match
from pipeline.schema.user import User
from pipeline.utils.firebase import initialize_firebase_for_prefect


def matching_pipeline() -> Flow:
    with Flow(name="matching_pipeline") as flow:
        param_community = Parameter(name="community", required=True)
        param_matching_retries = Parameter(name="matching_retries", default=5)
        param_release = Parameter(name="release", required=True)
        param_force = Parameter(name="force", required=False)
        const_now = Constant(name="now", value=datetime.datetime.now())

        secret_database_url = PrefectSecret("database_url")
        secret_admin_credentials = PrefectSecret("admin_credentials")
        db = initialize_firebase_for_prefect(
            secret_database_url, secret_admin_credentials
        )

        df_users = extract_users(db, param_community)
        df_recent_matches = extract_recent_matches(db, param_community)
        df_matches = compute_fallback_matches(
            df_users,
            df_recent_matches,
            param_community,
            param_release,
            param_matching_retries,
        )

        # Do not attempt deletion until new matches are ready
        deleted = delete_previous_release(
            db, param_community, param_release, const_now, param_force
        )
        deleted.set_upstream(df_matches)

        # Do not attempt upload until previous release deletion resolved
        uploaded = upload_matches(
            db, df_matches, param_community, param_release, param_force
        )
        uploaded.set_upstream(deleted)

    return flow


if __name__ == "__main__":
    flow = matching_pipeline()
    flow.run(
        parameters={
            "community": "demo",
            "release": "2022-04-17",
        }
    )
