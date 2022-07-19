import prefect
from prefect import task

from pipeline.types import Notification


class CheckMessageNotifier:
    def __init__(self):
        pass

    def verify_notification(self, notif: Notification) -> bool:

        # A notification is valid if last messaged time is at least 1 day (24 hours)

        if notif.last_msg_time.days >= 1:
            return True
        else:
            return False

    @task
    def valid_notification(self, notif: Notification):

        logger = prefect.context.get("logger")
        notif_is_valid = self.verify_notification(notif)
        if notif_is_valid:
            logger.info("Notification is valid")
        else:
            logger.warning(
                "Invalid notification: last messaged time was less than 24 hours"
            )
