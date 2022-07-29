from typing import Dict, List

import prefect
from prefect import Flow, Parameter
from prefect.tasks.secrets import PrefectSecret

from pipeline.extract import extract_users
from pipeline.notifications import NewMessageNotifier
from pipeline.transform import convert_users_from_df
from pipeline.types import NotificationInfo, NotificationInput
from pipeline.utils.firebase import initialize_firebase_for_prefect


@prefect.task
def get_users_to_notify(inp: NotificationInput) -> List[NotificationInfo]:
    logger = prefect.context.get("logger")
    notifier = NewMessageNotifier()
    logger.info("Determining users to notify")
    notif_info = notifier.get_notifications(inp=inp)
    logger.info(f"Done. Number of users to notifiy: {len(notif_info)}")
    return notif_info


def notifications_flow(defaults: Dict = {}) -> Flow:
    with Flow(name="notification_flow") as flow:
        # Retrieve community parameter
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
    """
    Extract chat data for the community in current release

     * Will contain messages and information about the match

     * David is working on implementing this; add it to flow once he's finished
    """
    # TODO: add chat data extraction

    # Extract user in the community
    df_users = extract_users(db, param_community)

    # Transform users from dataframe to user objects
    users_w_profile = convert_users_from_df(df_users)
