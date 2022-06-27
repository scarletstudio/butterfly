"""Feature flags for the backend API."""

import os


def get_ninja_api_settings():
    settings = {}
    environment = os.environ.get("ENVIRONMENT", None)
    is_dev = environment == "development"
    if not is_dev:
        # Disable API documentation endpoints:
        # https://github.com/vitalik/django-ninja/issues/480
        settings["docs_url"] = None
    return settings
