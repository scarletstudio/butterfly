from unittest.mock import patch

from django.http import JsonResponse

# Decorator alias to patch a test function with a mock database.
with_mock_db = patch("backend.utils.firebase.db")


def assert_response_match(a: JsonResponse, b: JsonResponse):
    """Asserts that two JSON response have the same content."""
    assert isinstance(a, JsonResponse), "Input a is not a JsonResponse."
    assert isinstance(b, JsonResponse), "Input b is not a JsonResponse."
    assert a.content == b.content, f"{a.content} != {b.content}"
