from pipeline.types import NotificationInfo, NotificationInput

"""This class only considers one chat at a time
The input type contains data about the chat, as well as the current date/time
The output type is a list, because there should be more than one person receiving a notification"""


class Notifier:

    """
    * The Notifier parent class defines methods, inputs, and outputs of
      the associated child classes, which are the implementation of the
      other notification types

    * A notifier only works on one chat at a time
    """

    def __init__(self, name: str, min_chat: int = 0):
        self.name = name
        self.min_chat = min_chat
