from ninja import Router

from backend.utils import format_json

router = Router()


@router.post("/user/{uid_from}/{uid_to}")
def update_blocked_user(request, uid_from: str, uid_to: str):
    return format_json(message="Not yet implemented.")
