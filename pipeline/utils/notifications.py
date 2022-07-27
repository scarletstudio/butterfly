from typing import List

from pipeline.types import NotificationInfo, NotificationType, User


def notifications_per_user(
    notifications: List[NotificationInfo],
) -> List[NotificationInfo]:
    # iterates through list of notifications and returns notificationInfo
    lst_notifications: List[NotificationInfo] = []
    for notification in notifications:
        print(notification)
        if len(notification.messagers) >= 1:
            pass
            # if notification.notification_type == NotificationType.CHECK_MATCH:
            #     lst_notifications.append(
            #         NotificationInfo(
            #             recipient="",
            #             notification_type=NotificationType.CHECK_MATCH,
            #             messagers=["B"],
            #         )
            #     )
    return lst_notifications
