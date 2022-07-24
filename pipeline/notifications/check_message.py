from typing import List

import prefect
from prefect import task

from pipeline.matching.core.notifier import Notifier
from pipeline.types import NotificationInfo, NotificationInput


class NewMessageNotifier(Notifier):
    def __init__(self):
        pass

    def get_notifications(
        self, inp: NotificationInput
    ) -> List[NotificationInfo]:

        # check if all users in match have a message
        # if there are users who don't have a message, return a list of NotificationInfo objs associated w/ them
        users_with_msg = set()
        names_of_users_with_msg = []
        users_to_notify = []
        for msg in inp.chatdata.messages:
            if msg.from_user in inp.chatdata.participants:
                users_with_msg.add(msg.from_user)
        for uid in users_with_msg:
            user_display_name = (inp.chatdata.participants[uid]).displayName
            names_of_users_with_msg.append(user_display_name)
        for uid, user in inp.chatdata.participants.items():
            if uid not in users_with_msg:
                users_to_notify.append(
                    NotificationInfo(
                        recipient=user,
                        messagers=sorted(names_of_users_with_msg),
                    )
                )
        return users_to_notify
