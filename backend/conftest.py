from django.conf import settings


def pytest_configure():
    settings.configure(ROOT_URLCONF="backend.server.urls")
