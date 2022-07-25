from typing import List

from pipeline.types import NotificationInfo, NotificationInput


class Notifier:

    """
    * The Notifier parent class defines methods, inputs, and outputs of
      the associated child classes, which are the implementation of the
      other notification types

    * A notifier only works on one chat at a time
    """

    def __init__(self, name: str):
        self.name = name

    def get_notifications(
        self, inp: NotificationInput
    ) -> List[NotificationInfo]:

        """
        * The return type of get_notifications() is a list because there could be
          more than one notification generated per chat, it could also be empty
        """
        pass
