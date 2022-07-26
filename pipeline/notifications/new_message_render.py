from typing import Set

from pipeline.notifications.render_notification import (
    InvalidNotificationTypeException,
    RenderNotification,
)
from pipeline.types import NotificationInfo, NotificationType


class NewMessageRender(RenderNotification):
    def __init__(self):
        pass

    def format_messager_names(self, inp: Set[str]) -> str:

        # helper function that properly formats (grammatically) the set of messager names
        msgers_names = ""
        if len(inp) == 2:
            msgers_names = " and ".join(inp)
        elif len(inp) > 2:
            x = 0
            for msg in inp:
                if x == len(inp) - 1:
                    msgers_names += f"and {msg}"
                    break
                msgers_names += f"{msg}, "
                x += 1
        else:
            msgers_names = "".join(inp)
        return msgers_names

    def render(self, info: NotificationInfo) -> str:

        # if the notification type doesn't match the type of render, raise an exception saying as much
        if info.notification_type != NotificationType.CHECK_MESSAGE:
            raise InvalidNotificationTypeException(
                "This renderer only supports CHECK_MESSAGE notifications."
            )
        msgers_names = self.format_messager_names(inp=info.messagers)
        render = f"Hi {info.recipient.displayName}. You have a new message(s) from {msgers_names}."
        return render
