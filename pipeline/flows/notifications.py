import datetime
import itertools
from typing import Dict, List

import prefect
from prefect import Flow, Parameter
from prefect.tasks.secrets import PrefectSecret

from pipeline.extract import extract_users
from pipeline.notifications import NewMessageNotifier, NewMessageRender
from pipeline.transform import convert_users_from_df
from pipeline.types import (
    ChatData,
    Message,
    NotificationInfo,
    NotificationInput,
    NotificationType,
    User,
)
from pipeline.utils.firebase import initialize_firebase_for_prefect

NOTIFIERS = [NewMessageNotifier()]
RENDERERS = {NotificationType.CHECK_MESSAGE: NewMessageRender()}

# this simple task is a placeholder for the extract chatdata task
@prefect.task
def return_pseudo_chatdata(community: str) -> List[ChatData]:

    msg_1 = Message(
        from_user="A", timestamp=datetime.datetime.now(), message="Hi Brian"
    )
    messages = [msg_1]
    participants = {
        "A": User(uid="A", displayName="Ayman", email="ayman@iit.edu"),
        "B": User(uid="B", displayName="Brian", email="brian@iit.edu"),
    }
    fake_extracted_chats = [
        ChatData(
            release_timestamp=datetime.datetime.now(),
            participants=participants,
            messages=messages,
        ),
        ChatData(release_timestamp=datetime.datetime.now()),
        ChatData(release_timestamp=datetime.datetime.now()),
    ]
    return fake_extracted_chats


@prefect.task
def get_notifications(inp: List[ChatData]) -> List[NotificationInfo]:
    logger = prefect.context.get("logger")
    # add other types of notifiers to list once they are implemented
    logger.info("Generating notifications")
    notif_info_lst = []
    for chatdata in inp:
        notif_input = NotificationInput(
            chatdata=chatdata, run_datetime=datetime.datetime.now()
        )
        for notifier in NOTIFIERS:
            notif_info = notifier.get_notifications(inp=notif_input)
            notif_info_lst.append(notif_info)
    # flatten notif_info_lst, which is a list of lists
    flat_notif_info_lst = list(itertools.chain(*notif_info_lst))
    logger.info(
        f"Done. Number of notifications generated: {len(flat_notif_info_lst)}"
    )
    return flat_notif_info_lst


@prefect.task
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


@prefect.task
def render_notifications(
    notifs: List[NotificationInfo],
) -> List[str]:
    logger = prefect.context.get("logger")
    output_lst = []
    for notif in notifs:
        renderer = RENDERERS.get(notif.notification_type)
        if renderer:
            output_str = renderer.render(notif)
            logger.info(output_str)
            output_lst.append(renderer.render(notif))
    return output_lst


def notifications_flow(defaults: Dict = {}) -> Flow:
    with Flow(name="notifications_flow") as flow:
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
        pseudo_chatadata = return_pseudo_chatdata(param_community)
        # Truncate list of notifications by hierarchy
        notifications = get_notifications(inp=pseudo_chatadata)
        final_notifications = notif_hierarchy(notifs=notifications)
        # Assign renderers to notifications
        notifs_with_renderers = render_notifications(notifs=final_notifications)

    return flow
