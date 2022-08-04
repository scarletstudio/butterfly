from dataclasses import dataclass
from typing import Any, Dict


@dataclass
class AnalyticsEvent:
    event_type: str
    data: Dict[str, Any]
    timestamp: int
