from pipeline.notifications.renderer import RenderNotification
from pipeline.types import NotificationInfo


class NewMessageRender(RenderNotification):
    def __init__(self):
        pass

    def render(self, inp: NotificationInfo) -> str:

        # if the notification type doesn't match the type of render, return immediately saying as much
        if inp.notification_type.value != "check_message":
            return "Renderer does not support this type of notification."
        str_msg_lst = ""
        if len(inp.messagers) == 2:
            str_msg_lst = " and ".join(inp.messagers) + "."
        elif len(inp.messagers) > 2:
            x = 0
            for msg in inp.messagers:
                if x == len(inp.messagers) - 1:
                    str_msg_lst += f"and {msg}."
                    break
                str_msg_lst += f"{msg}, "
                x += 1
        else:
            str_msg_lst = "".join(inp.messagers) + "."
        render = f"Hi {inp.recipient.displayName}. You have a new message(s) from {str_msg_lst}"
        return render
