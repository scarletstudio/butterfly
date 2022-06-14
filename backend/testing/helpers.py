from django.http import JsonResponse


def assert_json_response_match(a: JsonResponse, b: JsonResponse):
    """Asserts that two JSON response have the same content."""
    assert a.content == b.content, f"{a.content} != {b.content}"


def run_view_with_db(view_func, db, *args, **kwargs):
    """
    Passes a given database to the underlying view function. Only for use on
    view handlers that have been decorated with `with_db()`.
    """
    return view_func.__wrapped__(db, *args, **kwargs)
