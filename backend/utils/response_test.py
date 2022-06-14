from django.http import JsonResponse

from backend.testing import assert_json_response_match
from backend.utils import format_json


def test_format_json_default_success():
    actual = format_json(data="Hello!")
    expected = JsonResponse(
        {"success": True, "data": "Hello!"}, json_dumps_params={"indent": 2}
    )
    assert_json_response_match(actual, expected)


def test_format_json_override_success():
    actual = format_json(success=False, data="Sad :(")
    expected = JsonResponse(
        {"success": False, "data": "Sad :("}, json_dumps_params={"indent": 2}
    )
    assert_json_response_match(actual, expected)
