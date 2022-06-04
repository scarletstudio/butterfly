import sys

sys.path.append("./")

from pipeline.flows.matching import matching_flow

PROJECT = "butterfly"
FLOWS = [matching_flow]


if __name__ == "__main__":
    for get_flow in FLOWS:
        flow = get_flow()
        flow.register(project_name=PROJECT)
