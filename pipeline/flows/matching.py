import sys

sys.path.append("./")

import datetime
from typing import List

import prefect
from prefect import Flow, Parameter
from prefect.tasks.core.constants import Constant
from prefect.tasks.secrets import PrefectSecret

from pipeline.extract.matches import extract_recent_matches
from pipeline.extract.users import extract_users
from pipeline.load.release import delete_previous_release, upload_matches
from pipeline.load.validation import validate_and_log_matches
from pipeline.matching.evaluation.optimizers import (
    best_effort_minimize_repeat_matches,
)
from pipeline.matching.finalizers.fallback import get_fallback_matches
from pipeline.matching.finalizers.tasks import compute_fallback_matches
from pipeline.transform.matches import (
    convert_matches_from_df,
    filter_recent_matches,
    transform_matches_for_load,
)
from pipeline.transform.users import convert_users_from_df
from pipeline.types import Match, User
from pipeline.utils.firebase import initialize_firebase_for_prefect


@prefect.task
def compute_matches(
    users: List[User], recent_matches: List[Match]
) -> List[Match]:
    logger = prefect.context.get("logger")
    with_retries = best_effort_minimize_repeat_matches(
        n_retries=10, log=logger.info
    )
    get_matches_with_retries = with_retries(get_fallback_matches)
    return get_matches_with_retries(users, recent_matches)


def matching_flow() -> Flow:
    with Flow(name="matching_flow") as flow:
        # Retrieve pipeline parameters
        param_community = Parameter(name="community", required=True)
        param_release = Parameter(name="release", required=True)
        param_force = Parameter(name="force", required=False)
        const_now = Constant(name="now", value=datetime.datetime.now())

        # Configure database connection
        secret_database_url = PrefectSecret("database_url")
        secret_admin_credentials = PrefectSecret("admin_credentials")
        db = initialize_firebase_for_prefect(
            secret_database_url, secret_admin_credentials
        )

        # Extract data for pipeline
        df_users = extract_users(db, param_community)
        df_matches = extract_recent_matches(db, param_community)

        # Transform extracted data to matching inputs
        users = convert_users_from_df(df_users)
        matches = convert_matches_from_df(df_matches)
        recent_matches = filter_recent_matches(matches, param_release)

        # Compute and validate matches
        output_matches = compute_matches(users, recent_matches)
        passed = validate_and_log_matches(users, recent_matches, output_matches)

        # Do not prepare output matches for loading unless validation passed
        df_output_matches = transform_matches_for_load(
            output_matches, param_community, param_release
        )
        df_output_matches.set_upstream(passed)

        # Do not attempt deletion until new matches are ready
        deleted = delete_previous_release(
            db, param_community, param_release, const_now, param_force
        )
        deleted.set_upstream(df_output_matches)

        # Do not attempt upload until previous release deletion resolved
        uploaded = upload_matches(
            db, df_matches, param_community, param_release, param_force
        )
        uploaded.set_upstream(deleted)

    return flow


if __name__ == "__main__":
    flow = matching_flow()
    flow.run(
        parameters={
            "community": "demo",
            "release": "2022-04-17",
        }
    )
