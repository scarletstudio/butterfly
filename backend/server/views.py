from backend.utils import format_json


def hello(request):
    """
    Returns a friendly welcome message.
    """
    return format_json(message="Hello! The backend is up and running.")
