from django.http import JsonResponse

# Parameters for rendering JSON responses
dumps_params = {
    "indent": 2,
}


def format_json(status: int = 200, **data) -> JsonResponse:
    """Formats a JSON response to return to the client."""
    return JsonResponse(
        status=status, data=data, json_dumps_params=dumps_params
    )
