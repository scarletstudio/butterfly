from typing import Any, Dict

from ninja import Router, Schema

from backend.utils import format_json

router = Router()


class AnalyticsEvent(Schema):
    event_type: str
    data: Dict[str, Any]


@router.post("/")
def post_analytics_data(request, event: AnalyticsEvent):
    print(event)
    return format_json(message="Logged.")
