from typing import Dict

import prefect
from prefect import task

from pipeline.types import AnalyticsEvent


@task
def compute_chat_analytics(all_chats):
    # dictionary - the key is the match id and
    # the value is the list of users that have chatted in that match
    chating_users_match: Dict[str, set] = {}
    bad_data = []

    for chat in all_chats:
        # breakpoint()
        if "chat" not in chat or "user" not in chat:
            bad_data.append(chat)
            continue
        chat_id = chat["chat"]
        user_id = chat["user"]
        ind = chat_id.index("/") + 1
        match_id = chat_id[ind:]

        if match_id in chating_users_match:
            chating_users_match[match_id].append(user_id)
        else:
            chating_users_match[match_id] = set(user_id)

    # number of chats with multiple chatting users
    chats_multiple_users = 0
    for key in chating_users_match:
        if len(chating_users_match[key]) > 1:
            chats_multiple_users = chats_multiple_users + 1

    logger = prefect.context.get("logger")

    # percentage of users that are responding to each other in any given community.
    logger.info(chats_multiple_users / len(chating_users_match))
