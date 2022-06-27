import json
from json import JSONDecodeError
from typing import Optional, Tuple

from django.http import JsonResponse
from ninja import Router

from backend.attributes import is_intent_map
from backend.utils import format_json, get_db

router = Router()


# Map of attribute ID to a function that checks whether the given data is a
# valid value for that attribute.
VALIDATED_ATTRIBUTES = {
    "interests": lambda d: isinstance(d, bool),
    "intents": is_intent_map,
}

CommunityOrError = Tuple[Optional[str], Optional[JsonResponse]]


def validate_request(request, attribute: str, method: str) -> CommunityOrError:
    if request.method != method:
        err = format_json(status=405, error=f"Only supported for {method}.")
        return None, err
    # Query parameter will come from request.GET even on a POST
    community = getattr(request, "GET", {}).get("community")
    if attribute not in VALIDATED_ATTRIBUTES:
        err = format_json(status=400, error=f"Invalid attribute: {attribute}")
        return None, err
    if not community:
        err = format_json(status=400, error="Missing community.")
        return None, err
    return community, None


@router.get("users/{uid}/{attribute}")
def view_attribute(request, uid: str, attribute: str):
    community, err = validate_request(request, attribute, method="GET")
    if err:
        return err

    db = get_db()
    ref = db.reference(f"attributes/{attribute}/{community}/{uid}")
    raw = ref.get()

    values = []
    if raw:
        values = [dict(code=code, data=data) for code, data in raw.items()]
    return format_json(attributes=values)


@router.post("users/{uid}/{attribute}/{code}")
def view_update_attribute(request, uid: str, attribute: str, code: str):
    community, err = validate_request(request, attribute, method="POST")
    if err:
        return err

    raw_update = request.POST.get("update")
    if not raw_update:
        return format_json(status=400, error="No update value for attribute.")

    try:
        update = json.loads(raw_update)
    except JSONDecodeError:
        return format_json(status=400, error="Update is not valid JSON.")

    is_valid = VALIDATED_ATTRIBUTES[attribute]
    if not is_valid(update):
        return format_json(status=400, error=f"Invalid data for {attribute}.")

    db = get_db()
    ref = db.reference(f"attributes/{attribute}/{community}/{uid}/{code}")
    ref.update(update)
    return format_json(success=True)
