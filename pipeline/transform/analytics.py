from typing import List

from prefect import task

from pipeline.types import AnalyticsEvent


# task to filter chats based on community
@task
def filter_chat_community(lst: List[AnalyticsEvent], community):
    list_community = []
    for analytics_event in lst:
        if "send_chat_message" == analytics_event.event_type:
            if analytics_event.data.get("community") is None:
                continue
            elif community == analytics_event.data["community"]:
                list_community.append(analytics_event.data)
    return list_community


# task to filter data to only chat events
@task
def filter_chat_events(lst: List[AnalyticsEvent]):
    chat_events = []
    for analytics_event in lst:
        if "send_chat_message" == analytics_event.event_type:
            if analytics_event.data.get("community") == "demo":
                continue
            chat_events.append(analytics_event.data)
    return chat_events
