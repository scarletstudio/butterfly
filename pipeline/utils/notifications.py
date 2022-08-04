from typing import List

from pipeline.types import NotificationInfo, NotificationType, User


def notifications_per_user(
    notifications: List[NotificationInfo],
) -> List[NotificationInfo]:
    # iterates through list of notifications and returns notificationInfo
    list_notifications: List[NotificationInfo] = []
    recipients = set()
    for notification in notifications:
        if notification.recipient.uid in recipients:
            continue

        list_notifications.append(notification)
        recipients.add(notification.recipient.uid)
    return list_notifications
