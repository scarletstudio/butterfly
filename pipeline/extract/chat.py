from typing import Dict, List, Set

import pandas as pd
import prefect
from prefect import task

from pipeline.extract.users import extract_users
from pipeline.transform.users import convert_users_into_hash
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


@task
def extract_recent_chatdata(db, community: Community) -> List[ChatData]:
    logger = prefect.context.get("logger")
    chat_ref = db.reference(f"matches/{community}")
    user_chat_records = chat_ref.get()
    if not user_chat_records:
        logger.info(f"No user-chat records for commmnity: {community}")
        return []
    logger.info(f"Extracted {len(user_chat_records)} user-chat records.")
    ids: Set[ChatMatchId] = set()
    chatList: List[ChatData] = []

    df_users = extract_users.run(db, community)
    users = convert_users_into_hash(df_users)

    for key in user_chat_records.keys():
        if user_chat_records[key]["id"] in ids:
            continue

        timestamp = user_chat_records[key]["release_timestamp"]
        id = user_chat_records[key]["id"]
        participants = user_chat_records[key]["participants"]
        logger.info(f"participants: {participants}")
        rtag = user_chat_records[key]["release_tag"]
        chatdata_title = user_chat_records[key]["title"]
        raw_metadata = user_chat_records[key].get("metadata", {})
        parsed_md = MatchMetadata(**raw_metadata)

        # run extract_message
        ext_message = extract_message_data(db, community=community, chatid=id)
        if ext_message:
            logger.info(f"Extracted message: {ext_message}")

        ext_users = extract_user_data(
            db, community=community, participants=participants, users=users
        )
        if ext_users:
            logger.info(f"Extracted users: {ext_users}")

        cd1 = ChatData(
            release_timestamp=timestamp,
            chat_match_id=id,
            community_id="sds",
            participants=participants,
            release_tag=rtag,
            title=chatdata_title,
            metadata=parsed_md,
            messages=ext_message,
        )
        chatList.append(cd1)
        ids.add(id)
    logger.info(
        f"Converted to {len(chatList)} chat records with {len(ids)} user ID's."
    )
    logger.info(f"IDs: {ids}\n \nChatList: {chatList}")
    df_recent_chatdata = pd.DataFrame(chatList)
    logger.info("Returned {} rows, {} cols.".format(*df_recent_chatdata.shape))
    return chatList


# additional function
# given a userId return a User object instead of participants in Dict[UserId, User] format
def extract_user_data(
    db, community: Community, participants: Dict, users: Dict[UserId, User]
) -> Dict[UserId, User]:
    for key in participants.keys():
        user = users.get(key)
        if not user:
            user = User(uid=key, displayName="Unknown User")
        participants[key] = users[key]
    return participants


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
            m = Message(
                from_user=message["from"],
                timestamp=message["timestamp"],
                message_type=message["type"],
                message=message["message"],
            )
        l_messages.append(m)
    return l_messages
