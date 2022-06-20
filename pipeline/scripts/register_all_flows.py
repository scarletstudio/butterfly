import sys

sys.path.append("./")

from pipeline.flows.matching import matching_flow

PROJECT = "butterfly"
FLOWS = [matching_flow]


def register_all_flows():
    for get_flow in FLOWS:
        flow = get_flow()
        # Only register a new version if flow metadata has changed
        flow_hash = flow.serialized_hash()
        flow.register(project_name=PROJECT, idempotency_key=flow_hash)


if __name__ == "__main__":
    register_all_flows()
