from typing import List

from prefect import task

from pipeline.types import AnalyticsEvent


@task
def filter_chat_community(lst: List[AnalyticsEvent], community):
    list_community = []
    # wrong_data = []
    for analytics_event in lst:
        # breakpoint()
        if "send_chat_message" == analytics_event.event_type:
            if analytics_event.data.get("community") is None:
                # wrong_data.append(analytics_event.data)
                continue
            elif community == analytics_event.data["community"]:
                list_community.append(analytics_event.data)
    return list_community
