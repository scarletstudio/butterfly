import sys

sys.path.append("./")

from pipeline.flows.config import FLOWS, PROJECT


def register_all_flows():
    for config in FLOWS.values():
        get_flow = config.get("flow")
        if not get_flow:
            continue
        defaults = config.get("defaults", {})
        flow = get_flow(defaults)
        flow.register(project_name=PROJECT)


if __name__ == "__main__":
    register_all_flows()
