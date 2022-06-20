import sys

sys.path.append("./")

import logging
import time

from watchdog.events import FileSystemEventHandler
from watchdog.observers import Observer

from pipeline.scripts.register_all_flows import register_all_flows


class RegisterEventHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        register_all_flows()


if __name__ == "__main__":
    # Copied from: https://pythonhosted.org/watchdog/quickstart.html
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    path = sys.argv[1] if len(sys.argv) > 1 else "."
    event_handler = RegisterEventHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
