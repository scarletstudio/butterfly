from ninja import Router

from backend.utils import format_json

router = Router()


@router.post("/user/{uid_from}/{uid_to}")
def view_block_user(request, uid_from: str, uid_to: str):
    return format_json(message="Not yet implemented.")
