from typing import Iterator, List

import prefect
from prefect import task

from pipeline.types import ChatData, NotificationInfo, User


class Notifier:
    def __init__(self):
        pass

    def get_users_to_notify(self, chatdata: ChatData) -> List[User]:

        # check if all users in match have a message
        # if there are users who don't have a message, return a list of them for notification
        users_with_msg = set()
        users_to_notify = []
        for msg in chatdata.messages:
            if msg.from_user in chatdata.participants:
                users_with_msg.add(msg.from_user)
        for uid, user in chatdata.participants.items():
            if uid not in users_with_msg:
                users_to_notify.append(user)
        return users_to_notify

    def get_notification_info(
        self, chatdata: ChatData
    ) -> Iterator[NotificationInfo]:
        names_of_msgers = []
        users_to_notify = self.get_users_to_notify(chatdata)
        for msg in chatdata.messages:
            messager = chatdata.participants[msg.from_user]
            names_of_msgers.append(messager.displayName)
        joined = ", ".join(names_of_msgers)
        for user in users_to_notify:
            content = f"Hi {user.displayName}. You have new a message(s) from {joined}"
            yield NotificationInfo(
                name=user.displayName, email=user.email, content=content
            )
