import sys

sys.path.append("./")

import hashlib
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
        self.latest_checksum = {}

    def on_modified(self, event):
        # Only fire on changes to files, not their directories
        if not event.is_directory:
            file_path = event.src_path
            prev_checksum = self.latest_checksum.get(file_path, None)
            next_checksum = None

            # Read file and hash contents
            with open(file_path, "rb") as file:
                # Fine to use the insecure MD5 hash for checking file changes
                next_checksum = hashlib.md5(file.read()).hexdigest()  # nosec

            # Update file contents hash
            self.latest_checksum[file_path] = next_checksum

            # Only register new version if file contents hash changed
            # Includes any save to a file that was not hashed before
            if next_checksum != prev_checksum:
                action = "Saved" if prev_checksum is None else "Changed"
                print(f"{action} {file_path}")
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
