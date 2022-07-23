from typing import List

from pipeline.types import NotificationInfo, NotificationInput


class Notifier:
    def __init__(self, name: str):
        self.name = name

    def get_notifications(
        self, inp: NotificationInput
    ) -> List[NotificationInfo]:
        pass
