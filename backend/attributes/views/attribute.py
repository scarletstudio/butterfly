import json
from json import JSONDecodeError
from typing import Optional

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

OptionalError = Optional[JsonResponse]


def validate_request(request, attribute: str, method: str) -> OptionalError:
    if request.method != method:
        return format_json(status=405, error=f"Only supported for {method}.")
    if attribute not in VALIDATED_ATTRIBUTES:
        return format_json(status=400, error=f"Invalid attribute: {attribute}")
    return None


@router.get("/community/{community}/users/{uid}/{attribute}")
def get_user_attribute_data(request, community: str, uid: str, attribute: str):
    err = validate_request(request, attribute, method="GET")
    if err:
        return err

    db = get_db()
    ref = db.reference(f"attributes/{attribute}/{community}/{uid}")
    raw = ref.get()

    values = []
    if raw:
        values = [dict(code=code, data=data) for code, data in raw.items()]
    return format_json(attributes=values)


@router.post("/community/{community}/users/{uid}/{attribute}/{code}")
def update_user_attribute_data(
    request, community: str, uid: str, attribute: str, code: str
):
    err = validate_request(request, attribute, method="POST")
    if err:
        return err

    # TODO(vinesh): This hack is needed because the Django test client uses
    # request.POST but actual app fetches use request.body. Will clean up later.
    # The request.POST QueryDict holds an array of values for each key, so we
    # have to extract the update value, then create a new JSON string.
    raw_update = request.body
    post_data = request.POST
    if post_data:
        val = json.loads(post_data.get("update"))
        raw_update = json.dumps(dict(update=val))

    if not raw_update:
        return format_json(status=400, error="No update value for attribute.")

    try:
        update = json.loads(raw_update).get("update")
    except JSONDecodeError:
        return format_json(status=400, error="Update is not valid JSON.")

    is_valid = VALIDATED_ATTRIBUTES[attribute]
    if not is_valid(update):
        return format_json(status=400, error=f"Invalid data for {attribute}.")

    db = get_db()
    ref = db.reference(f"attributes/{attribute}/{community}/{uid}/{code}")
    # Only dictionaries can be saved to Firebase with ref.update()
    if isinstance(update, dict):
        ref.update(update)
    else:
        ref.set(update)
    return format_json(success=True)
