import sys

sys.path.append("./")

from pipeline.flows.config import FLOWS


def get_and_run_flow(flow_name: str):
    config = FLOWS.get(flow_name, None)
    if not config:
        print(f"No config found for flow: {flow_name}")
        return
    get_flow = config.get("flow")
    if not get_flow:
        print(f"No function found for flow: {flow_name}")
        return
    defaults = config.get("defaults", {})
    flow = get_flow()  # type: ignore
    flow.run(parameters=defaults)


if __name__ == "__main__":
    get_and_run_flow(flow_name=sys.argv[1])
