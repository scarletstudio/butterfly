import sys

sys.path.append("./")

from pipeline.flows.config import FLOWS, PROJECT


def register_all_flows():
    for get_flow, defaults in FLOWS:
        flow = get_flow(defaults)
        flow.register(project_name=PROJECT)


if __name__ == "__main__":
    register_all_flows()
