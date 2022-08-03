import datetime
import itertools
from typing import Dict, List, Tuple, Union

import prefect
from prefect import Flow, Parameter
from prefect.tasks.secrets import PrefectSecret

from pipeline.extract import extract_users
from pipeline.notifications import NewMessageNotifier, NewMessageRender
from pipeline.transform import convert_users_from_df
from pipeline.types import ChatData, NotificationInfo, NotificationInput
from pipeline.utils.firebase import initialize_firebase_for_prefect


# this simple task is a placeholder for the extract chatdata task
@prefect.task
def return_pseudo_chatdata() -> List[ChatData]:
    fake_extracted_chats = [
        ChatData(release_timestamp=datetime.datetime.now()),
        ChatData(release_timestamp=datetime.datetime.now()),
        ChatData(release_timestamp=datetime.datetime.now()),
    ]
    return fake_extracted_chats


@prefect.task
def get_notifications(inp: List[ChatData]) -> List[NotificationInfo]:
    logger = prefect.context.get("logger")
    # add other types of notifiers to list once they are implemented
    notifier_lst = [NewMessageNotifier()]
    logger.info("Generating notifications")
    notif_info_lst = []
    for chatdata in inp:
        notif_input = NotificationInput(
            chatdata=chatdata, run_datetime=datetime.datetime.now()
        )
        for notifier in notifier_lst:
            notif_info = notifier.get_notifications(inp=notif_input)
            notif_info_lst.append(notif_info)
    # flatten notif_info_lst, which is a list of lists
    flat_notif_info_lst = list(itertools.chain(*notif_info_lst))
    logger.info(
        f"Done. Number of notifications generated: {len(flat_notif_info_lst)}"
    )
    return flat_notif_info_lst


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


def assign_renderers(
    notifs: List[NotificationInfo],
) -> List[Tuple[NotificationInfo, Union[NewMessageRender, None]]]:
    # Include other renderers to Union in type definition once they are implemented
    notifs_with_renderers = []
    # Include other renderers to dictionary once they are implemented
    renderers = {"check_message": NewMessageRender()}
    for notif in notifs:
        renderer = renderers.get(notif.notification_type.value)
        notifs_with_renderers.append((notif, renderer))
    return notifs_with_renderers


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
        pseudo_chatadata = return_pseudo_chatdata()
        # Truncate list of notifications by hierarchy
        notifications = get_notifications(inp=pseudo_chatadata)
        final_notifications = notif_hierarchy(notifs=notifications)
        # Assign renderers to notifications
        notifs_with_renderers = assign_renderers(notifs=final_notifications)

    return flow
