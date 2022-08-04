from typing import List

from prefect import task

from pipeline.types import AnalyticsEvent


@task
def extract_analytics(db) -> List[AnalyticsEvent]:
    ref = db.reference(f"analytics/")
    raw = ref.get()
    list_of_analytics = []
    for record in raw.values():
        event = AnalyticsEvent(
            event_type=record["event_type"] if "event_type" in record else None,
            data=record["data"] if "data" in record else None,
            timestamp=record["timestamp"] if "timestamp" in record else None,
        )
        list_of_analytics.append(event)
    return list_of_analytics
