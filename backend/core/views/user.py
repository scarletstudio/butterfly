from ninja import Router

from backend.utils import format_json, get_db

router = Router()


@router.get("/{uid}")
def get_user_data(request, uid: str):
    """Gets a user's profile data by their user ID."""
    db = get_db()
    data = db.reference(f"users/{uid}").get()
    if not data:
        return format_json(success=False, message=f"No user for ID: {uid}")
    return format_json(data=data)
