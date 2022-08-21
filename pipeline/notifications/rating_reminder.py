from typing import List

from pipeline.notifications.notifier import Notifier
from pipeline.types import NotificationInfo, NotificationInput, NotificationType


class RatingReminderNotifier(Notifier):
    def __init__(self):
        pass

    def get_notifications(
        self, inp: NotificationInput
    ) -> List[NotificationInfo]:
        remind_users = []
        min_chat: int = 3
        numMessages = 0
        listUsers = inp.chatdata.participants
        chatMessages = inp.chatdata.messages
        dateTime = inp.run_datetime
        for messagesSent in chatMessages:
            if messagesSent.from_user in listUsers:
                numMessages += 1
        if dateTime.weekday() == 5 and numMessages >= min_chat:
            for uid, user in listUsers.items():
                remind_users.append(
                    NotificationInfo(
                        recipient=user,
                        notification_type=NotificationType.RATE_MATCH,
                    )
                )
            return remind_users
        else:
            return list([])
