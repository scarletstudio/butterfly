import sys

sys.path.append("./")

import datetime
from typing import Dict, List, Tuple

import prefect
from prefect import Flow, Parameter
from prefect.tasks.core.constants import Constant
from prefect.tasks.secrets import PrefectSecret

from pipeline.extract import (
    extract_intent_upvotes,
    extract_intents,
    extract_interests,
    extract_match_stars,
    extract_recent_chatdata,
    extract_recent_matches,
    extract_users,
)
from pipeline.load.display_metrics import display_internal_matching_metrics
from pipeline.load.release import delete_previous_release, upload_matches
from pipeline.load.validation import validate_and_log_matches
from pipeline.matching.core import MatchingEngine
from pipeline.matching.engines.config import ENGINES
from pipeline.transform import (
    augment_users_with_intents,
    augment_users_with_interests,
    compute_internal_matching_metrics,
    convert_matches_from_df,
    convert_users_from_df,
    filter_recent_matches,
    get_matching_input,
    transform_matches_for_load,
)
from pipeline.types import EngineId, Match, MatchingInput, MatchingOutput, User
from pipeline.utils.firebase import initialize_firebase_for_prefect


@prefect.task
def compute_matches(
    inp: MatchingInput, engine_id: EngineId
) -> Tuple[MatchingOutput, List[Match]]:
    """Get a matching engine by ID, then run it on the given inputs."""
    logger = prefect.context.get("logger")
    Engine = ENGINES.get(engine_id, None)
    if not Engine:
        msg = f"No engine found for ID: `{engine_id}`"
        logger.warning(msg)
        raise ValueError(msg)
    engine: MatchingEngine = Engine(return_internal_data=True)
    logger.info(f"Running matching engine: `{engine_id}`")
    output = engine.run(inp)
    logger.info(f"Done. Output {len(output.matches)} matches.")
    return output, output.matches


def matching_flow(defaults: Dict = {}) -> Flow:
    with Flow(name="matching_flow") as flow:
        # Retrieve pipeline parameters
        param_engine = Parameter(
            name="engine",
            default=defaults.get("engine"),
            required=True,
        )
        param_community = Parameter(
            name="community",
            default=defaults.get("community"),
            required=True,
        )
        param_release = Parameter(
            name="release",
            default=defaults.get("release"),
            required=True,
        )
        param_force = Parameter(name="force", default=False, required=False)
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
        raw_intents = extract_intents(db, param_community)
        raw_interests = extract_interests(db, param_community)
        match_stars = extract_match_stars(db, param_community)
        intent_upvotes = extract_intent_upvotes(db, param_community)

        # Transform extracted data to matching inputs
        users_w_profile = convert_users_from_df(df_users)
        users_w_intents = augment_users_with_intents(
            users_w_profile, raw_intents
        )
        users_w_data = augment_users_with_interests(
            users_w_intents, raw_interests
        )
        matches = convert_matches_from_df(df_matches)
        recent_matches = filter_recent_matches(matches, param_release)

        # Compute and validate matches
        inp = get_matching_input(
            community=param_community,
            release=param_release,
            users=users_w_data,
            recent_matches=recent_matches,
            interests=[],
            intents=[],
            intent_upvotes=intent_upvotes,
            match_stars=match_stars,
        )
        matching_output, output_matches = compute_matches(inp, param_engine)
        # Validate using users without additional data added
        passed = validate_and_log_matches(
            users_w_profile, recent_matches, output_matches
        )

        computed_metrics = compute_internal_matching_metrics(matching_output)

        display_internal_matching_metrics(matching_output, computed_metrics)

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
            db, df_output_matches, param_community, param_release, param_force
        )
        uploaded.set_upstream(deleted)

    return flow
