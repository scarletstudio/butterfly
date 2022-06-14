from backend.utils import format_json, with_db


@with_db
def view_user(db, request, uid: str):
    """Gets a user's profile data by their user ID."""
    data = db.reference(f"users/{uid}").get()
    if not data:
        return format_json(success=False, message=f"No user for ID: {uid}")
    return format_json(data=data)
