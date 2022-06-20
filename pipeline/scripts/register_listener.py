import sys

sys.path.append("./")

import logging
import os
import time

from watchdog.events import PatternMatchingEventHandler
from watchdog.observers import Observer

TARGET_PATH = "pipeline"
PATTERNS = ["*.py"]


def register_prefect_flows():
    os.system("./run.sh prefect-register")  # nosec


class RegisterPrefectFlowsEventHandler(PatternMatchingEventHandler):
    def __init__(self):
        super().__init__(patterns=PATTERNS)

    def on_modified(self, event):
        if not event.is_directory:
            print(f"Saved {event.src_path}")
            register_prefect_flows()


if __name__ == "__main__":
    # Copied from: https://pythonhosted.org/watchdog/quickstart.html
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    event_handler = RegisterPrefectFlowsEventHandler()
    observer = Observer()
    observer.schedule(event_handler, path=TARGET_PATH, recursive=True)
    observer.start()
    register_prefect_flows()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
