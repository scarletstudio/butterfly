from pipeline.flows.matching import matching_flow

PROJECT = "butterfly"
FLOWS = {
    "matching": {
        "flow": matching_flow,
        "defaults": {
            "engine": "main",
            "community": "demo",
            "release": "2022-08-08",
        },
    }
}
