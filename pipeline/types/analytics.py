import datetime
from dataclasses import dataclass
from typing import Any, Dict


@dataclass
class AnalyticsEvent:
    event_type: str
    data: Dict[str, Any]
    timestamp: datetime.datetime
    host: str
    page_url: str
