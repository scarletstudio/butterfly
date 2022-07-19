import prefect
from prefect import task

from pipeline.types import Notification


class CheckMatchNotifier:
    def __init__(self):
        pass

    def verify_notification(self, notif: Notification) -> bool:

        # A notification is valid if it contains a match w/ at least 2 users

        if len(notif.match.users) >= 2:
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
            logger.warning("Invalid notification: matching may have failed")
