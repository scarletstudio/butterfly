from typing import List

import prefect
from prefect import task

from pipeline.types import NotificationInfo, NotificationInput


class NewMessageNotifier:
    def __init__(self):
        pass

    def get_users_to_notify(
        self, inp: NotificationInput
    ) -> List[NotificationInfo]:

        # check if all users in match have a message
        # if there are users who don't have a message, return a list of NotificationInfo objs associated w/ them
        users_with_msg = set()
        users_to_notify = []
        for msg in inp.chatdata.messages:
            if msg.from_user in inp.chatdata.participants:
                users_with_msg.add(msg.from_user)
        for uid, user in inp.chatdata.participants.items():
            if uid not in users_with_msg:
                notif_info_obj = NotificationInfo(
                    name=user.displayName,
                    email=user.email,
                    title=inp.chatdata.title,
                )
                users_to_notify.append(notif_info_obj)
        return users_to_notify
