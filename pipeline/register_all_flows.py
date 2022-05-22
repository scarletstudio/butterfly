import sys

sys.path.append("./")

from matching_pipeline import matching_pipeline


PROJECT = "butterfly"
FLOWS = [matching_pipeline]


if __name__ == "__main__":
    for get_flow in FLOWS:
        flow = get_flow()
        flow.register(project_name=PROJECT)
