from typing import Any, Dict

from ninja import Router, Schema

from backend.utils import SERVER_TIMESTAMP, format_json, get_db

router = Router()


class AnalyticsEvent(Schema):
    event_type: str
    data: Dict[str, Any]


@router.post("/")
def post_analytics_data(request, event: AnalyticsEvent):
    # Add timestamp to event data
    record = event.dict()
    record["timestamp"] = SERVER_TIMESTAMP

    # Save event to database
    db = get_db()
    ref = db.reference("analytics")
    ref.push(record)
    return format_json(message="Event saved successfully.")
