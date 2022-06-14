from django.http import JsonResponse

# Parameters for rendering JSON responses
dumps_params = {
    "indent": 2,
}


def format_json(**kwargs) -> JsonResponse:
    """Formats a JSON response to return to the client."""
    body = {"success": True, **kwargs}
    return JsonResponse(body, json_dumps_params=dumps_params)
