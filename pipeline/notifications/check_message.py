from typing import List

import prefect
from prefect import task

from pipeline.types import Notification, User


class Notifier:
    def __init__(self):
        pass

    def check_msg_notifier(self, notif: Notification) -> List[User]:

        # check if all users in match have a message
        # if there are users who don't have a message, return a list of them for notification
        users_with_msg = []
        users_to_notify = []
        for msg in notif.chatdata.messages:
            if msg.from_user in notif.match.users:
                users_with_msg.append(msg.from_user)
        for uid, user in notif.chatdata.participants.items():
            if uid not in users_with_msg:
                users_to_notify.append(user)
        return users_to_notify
