from django.http import JsonResponse

from backend.testing import assert_response_match
from backend.utils import format_json


def test_format_json_default_success():
    actual = format_json(data="Hello!")
    expected = JsonResponse(
        status=200, data={"data": "Hello!"}, json_dumps_params={"indent": 2}
    )
    assert_response_match(actual, expected)


def test_format_json_override_success():
    actual = format_json(status=404, data="Sad :(")
    expected = JsonResponse(
        status=404, data={"data": "Sad :("}, json_dumps_params={"indent": 2}
    )
    assert_response_match(actual, expected)
