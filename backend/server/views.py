from django.http import JsonResponse

# Parameters for rendering JSON responses
dumps_params = {
    "indent": 2,
}


def hello(request):
    """
    Returns a friendly welcome message.
    """
    return JsonResponse(
        {
            "success": True,
            "message": "Hello! The backend is up and running.",
        },
        json_dumps_params=dumps_params,
    )
