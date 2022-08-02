from typing import List, Set

import pandas as pd
import prefect
from prefect import task

from pipeline.types import (
    ChatData,
    ChatMatchId,
    Community,
    Match,
    MatchMetadata,
    Message,
    User,
    UserId,
)

# TODO:
# fix naming conventions

# add extract_chat_data in imports in flows/matching.py
# call your funciton in the flow after the other extract tasks

# Later: Write a function to join user objects and chatdata using user.uid
# Function to join chatdata and all messages relating to that chat


@task
def extract_recent_chatdata(db, community: Community) -> pd.DataFrame:
    logger = prefect.context.get("logger")
    chat_ref = db.reference(f"matches/{community}")
    user_chat_records = chat_ref.get()
    if not user_chat_records:
        logger.info(f"No user-chat records for commmnity: {community}")
        return pd.DataFrame()
    logger.info(f"Extracted {len(user_chat_records)} user-chat records.")
    # users: List[User] = []
    ids: Set[ChatMatchId] = set()
    chatList: List[ChatData] = []

    for key in user_chat_records.keys():
        if user_chat_records[key]["id"] not in ids:

            timestamp = user_chat_records[key]["release_timestamp"]
            id = user_chat_records[key]["id"]
            participants = user_chat_records[key]["participants"]
            logger.info(f"participants: {participants}")
            rtag = user_chat_records[key]["release_tag"]
            chatdata_title = user_chat_records[key]["title"]
            raw_metadata = user_chat_records[key].get("metadata", {})
            parsed_md = MatchMetadata(**raw_metadata)

            # run extract_message
            ext_message = extract_message_data(
                db, community=community, chatid=id
            )
            if ext_message:
                logger.info(f"Extracted message: {ext_message}")

            cd1 = ChatData(
                release_timestamp=timestamp,
                chat_match_id=id,
                community_id="sds",
                participants=participants,
                release_tag=rtag,
                title=chatdata_title,
                metadata=parsed_md,
                messages=[],
            )
            chatList.append(cd1)
            ids.add(id)
    # find and delete one of the duplicates
    logger.info(f"ids: {ids}, Chatlist: {chatList}")
    return pd.DataFrame({"A": []})


# additional function
# given a userId return a User object instead of participants in Dict[UserId, User] format
# def getUser(db, community: Community, userid: UserId) -> {UserId: User}:
# pass


def extract_message_data(
    db, community: Community, chatid: ChatMatchId
) -> List[Message]:  # helper function
    logger = prefect.context.get("logger")
    message_ref = db.reference(f"messages/{community}/{chatid}")
    message_records = message_ref.get()
    l_messages: List[Message] = []
    if not message_records:
        logger.info(f"No message records for commmnity: {community}/{chatid}")
    if message_records:
        logger.info(f"Extracted {len(message_records)} message records.")
        for message in message_records.values():
            print(message)
            m = Message(
                from_user=message["from"],
                timestamp=message["timestamp"],
                message_type=message["type"],
                message=message["message"],
            )
        l_messages.append(m)
    return l_messages
