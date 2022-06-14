from django.apps import AppConfig

from backend.utils.firebase import initialize_firebase_for_api


class ServerConfig(AppConfig):
    name = "server"

    def ready(self):
        initialize_firebase_for_api()
