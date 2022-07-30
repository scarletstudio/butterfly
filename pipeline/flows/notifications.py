import datetime
from typing import Dict, List

import prefect
from prefect import Flow, Parameter
from prefect.tasks.secrets import PrefectSecret

from pipeline.extract import extract_users
from pipeline.notifications import NewMessageNotifier
from pipeline.transform import convert_users_from_df
from pipeline.types import ChatData, NotificationInfo, NotificationInput
from pipeline.utils.firebase import initialize_firebase_for_prefect


@prefect.task
def get_users_to_notify(inp: NotificationInput) -> List[NotificationInfo]:
    logger = prefect.context.get("logger")
    # add other types of notifiers once they are implemented
    notifier = NewMessageNotifier()
    logger.info("Generating notifications")
    # refactor to account for additional notification types once they're implemented
    notif_info_lst = notifier.get_notifications(inp=inp)
    logger.info(
        f"Done. Number of notifications generated: {len(notif_info_lst)}"
    )
    return notif_info_lst


def notif_hierarchy(notifs: List[NotificationInfo]) -> List[NotificationInfo]:
    """
    Truncates the NotificationInfo list based on a hierarchy of notifications, which is as follows:
    1. check match (highest)
    2. check message
    3. rate match
    4. edit profile (lowest)
    """
    truncated_notif_info = {}
    for notif in notifs:
        if notif.notification_type.value == "check_match":
            truncated_notif_info[notif.recipient.uid] = notif
        elif notif.notification_type.value == "check_message":
            notif_in_trunc = truncated_notif_info.get(notif.recipient.uid)
            if notif_in_trunc is None:
                truncated_notif_info[notif.recipient.uid] = notif
            elif notif_in_trunc.notification_type.value != "check_match":
                truncated_notif_info[notif.recipient.uid] = notif
        elif notif.notification_type.value == "rate_match":
            notif_in_trunc = truncated_notif_info.get(notif.recipient.uid)
            if notif_in_trunc is None:
                truncated_notif_info[notif.recipient.uid] = notif
            elif notif_in_trunc.notification_type.value == "edit_profile":
                truncated_notif_info[notif.recipient.uid] = notif
        else:
            truncated_notif_info[notif.recipient.uid] = notif
    return list(truncated_notif_info.values())


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

    # Extract users in the community
    df_users = extract_users(db, param_community)

    # Transform users from dataframe to user objects
    users_w_profile = convert_users_from_df(df_users)

    # check hierarchy of notifications
    chatdata = ChatData(release_timestamp=datetime.datetime.now())
    inp = NotificationInput(
        chatdata=chatdata, run_datetime=datetime.datetime.now()
    )
    notifs = get_users_to_notify(inp=inp)
    final_notifications = notif_hierarchy(notifs=notifs)
