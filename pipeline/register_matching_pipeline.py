import sys

sys.path.append("./")

from matching_pipeline import matching_pipeline


if __name__ == "__main__":
    flow = matching_pipeline()
    flow.register(project_name="butterfly")
