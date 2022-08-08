from datetime import datetime
from typing import List

from prefect import task

from pipeline.types import AnalyticsEvent


@task
def extract_analytics(db) -> List[AnalyticsEvent]:
    ref = db.reference("analytics")
    raw = ref.get()
    list_of_analytics = []
    for record in raw.values():
        event = AnalyticsEvent(
            event_type=record.get("event_type"),
            data=record.get("data"),
            timestamp=datetime.fromtimestamp(record.get("timestamp") // 1000),
            host=record.get("host"),
            page_url=record.get("page_url"),
        )
        list_of_analytics.append(event)
    return list_of_analytics
