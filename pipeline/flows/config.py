from pipeline.flows.matching import matching_flow

PROJECT = "butterfly"
FLOWS = [
    (matching_flow, dict(engine="main", community="demo", release="2022-04-17"))
]
