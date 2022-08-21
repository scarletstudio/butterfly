from pipeline.flows.analytics import analytics_flow
from pipeline.flows.matching import matching_flow
from pipeline.flows.notifications import notifications_flow

PROJECT = "butterfly"
FLOWS = {
    "matching": {
        "flow": matching_flow,
        "defaults": {
            "engine": "main",
            "community": "demo",
            "release": "2022-08-08",
        },
    },
    "notifications": {
        "flow": notifications_flow,
        "defaults": {"community": "demo"},
    },
    "analytics": {
        "flow": analytics_flow,
        "defaults": {},
    },
}
