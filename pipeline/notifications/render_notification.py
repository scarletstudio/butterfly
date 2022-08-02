from pipeline.types import NotificationInfo


class RenderNotification:

    """
    * The Renderer parent class defines methods, inputs, and outputs of
      the associated child classes, which are the implementation of the
      other renders for the notification types

    * A render, similiar to a notifier, only works on one notification at a time
    """

    def __init__(self, name: str):
        self.name = name

    def render(self, info: NotificationInfo) -> str:

        """
        * render takes a NotificationInfo obj in and returns a
          unique string based on the information w/in the Notification obj
        """
        pass


class InvalidNotificationTypeException(Exception):
    pass
