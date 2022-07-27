from typing import List

from pipeline.types import NotificationInfo, NotificationType, User


def notifications_per_user(
    notifications: List[NotificationInfo],
) -> List[NotificationInfo]:
    # iterates through list of notifications and returns notificationInfo
    lst_notifications: List[NotificationInfo] = []
    for notification in notifications:
        print(notification)
        if len(notifications) > 1:
            # lst_notifications.append(
            #     NotificationInfo(
            #         recipient=User, notification_type=NotificationType
            #     )
            # )
            pass
    return lst_notifications
