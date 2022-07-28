import pandas as pd
import prefect
from prefect import task

from pipeline.types import Community, Match

# TODO:
# fix naming conventions

# add extract_chat_data in imports in flows/matching.py
# call your funciton in the flow after the other extract tasks

# Later: Write a function to join user objects and chatdata using user.uid
# Function to join chatdata and all messages relating to that chat


@task
def extract_recent_chatdata(db, community: Community) -> pd.DataFrame:
    logger = prefect.context.get("logger")
    chat_ref = db.reference(f"messages/{community}")
    chat_records = chat_ref.get()
    if not chat_records:
        logger.info(f"No user-chat records for commmnity: {community}")
        return pd.DataFrame()
    logger.info(f"Extracted {len(chat_records)} user-chat records.")
    # loop over values --> chats.values()
    # for record in chat_records.value():
    # find and delete one of the duplicates
    return pd.DataFrame({"A": []})
