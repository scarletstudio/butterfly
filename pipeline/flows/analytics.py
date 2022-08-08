from typing import Dict

import pandas as pd
import prefect
from prefect import Flow, Parameter
from prefect.tasks.core.constants import Constant
from prefect.tasks.secrets import PrefectSecret

from pipeline.extract.analytics import extract_analytics
from pipeline.transform.analytics import (
    filter_chat_community,
    filter_chat_events,
)
from pipeline.transform.chat_analytics import compute_chat_analytics
from pipeline.utils.firebase import initialize_firebase_for_prefect


def analytics_flow(defaults: Dict = {}) -> Flow:
    with Flow(name="analytics_flow") as flow:
        # logger = prefect.context.get("logger")
        param_community = Parameter(
            name="community",
            default=defaults.get("community"),
            required=True,
        )

        # Configure database connection
        secret_database_url = PrefectSecret("database_url")
        secret_admin_credentials = PrefectSecret("admin_credentials")
        db = initialize_firebase_for_prefect(
            secret_database_url, secret_admin_credentials
        )

        events = extract_analytics(db)
        all_chats = filter_chat_events(events)
        compute_chat_analytics(all_chats)

    return flow
