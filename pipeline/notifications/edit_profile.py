import prefect
from prefect import task

from pipeline.types import Notification


class EditProfileNotifier:
    def __init__(self):
        pass

    def verify_notification(self, notif: Notification) -> bool:

        # A notification is valid if a match does not have a "blank" or "empty" generator

        if notif.match.metadata.generator != "blank":
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
            logger.warning("Invalid notification: generator was 'blank'")
