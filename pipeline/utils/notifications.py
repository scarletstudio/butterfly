from typing import List

from pipeline.types import NotificationInfo, NotificationType, User

PRIORITY = {
    NotificationType.CHECK_MESSAGE: 1,
    NotificationType.RATE_MATCH: 2,
    NotificationType.EDIT_PROFILE: 3,
    NotificationType.CHECK_MATCH: 4,
}


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


def get_notif_priority(notification: NotificationInfo) -> int:
    return PRIORITY[notification.notification_type]


def priority_notifications_per_user(
    notifications: List[NotificationInfo],
) -> List[NotificationInfo]:
    # sorts notifications by priority and returns 1 notification for each user
    sorted_notifs = sorted(notifications, key=get_notif_priority)
    final_notifs = notifications_per_user(sorted_notifs)
    return final_notifs
