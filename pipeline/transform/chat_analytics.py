from typing import Dict

import prefect
from prefect import task

from pipeline.types import AnalyticsEvent


# task to calculate the percentage of users that are getting responses to their messages
@task
def compute_chat_analytics(all_chats):
    # dictionary - the key is the match id
    # the value is the set of users that have chatted in that match
    chating_users_match: Dict[str, set] = {}
    for chat in all_chats:
        # checks if the data contains a chat id
        if "chat" not in chat:
            continue
        chat_id = chat["chat"]
        user_id = chat["user"]
        if chat_id in chating_users_match:
            chating_users_match[chat_id].add(user_id)
        else:
            chating_users_match[chat_id] = {user_id}

    # calculates the number of chats with multiple chatting users
    chats_multiple_users = 0
    for key in chating_users_match:
        if len(chating_users_match[key]) > 1:
            chats_multiple_users = chats_multiple_users + 1

    # percentage of users that are responding to each other.
    percentage_chatting = (
        chats_multiple_users / len(chating_users_match)
    ) * 100

    logger = prefect.context.get("logger")
    string_formatted = "Chat Response Rate: {per:.2f}%".format(
        per=percentage_chatting
    )
    logger.info(string_formatted)
