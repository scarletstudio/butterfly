from ninja import Router

from backend.utils import SERVER_TIMESTAMP, format_json, get_db

router = Router()


@router.get("/block/user/{uid_from}")
def get_blocked_users_for_user(request, uid_from: str):
    db = get_db()
    ref = db.reference(f"safety/blocks/{uid_from}")
    raw = ref.get()
    blocked_users = []
    if raw:
        blocked_users = [{"uid": uid, **data} for uid, data in raw.items()]
    return format_json(blocks=blocked_users)


@router.post("/block/user/{uid_from}/{uid_to}/{blocked}")
def update_blocked_user(request, uid_from: str, uid_to: str, blocked: bool):
    # Note: Blocking a user will block them across all communities.
    data = {
        "blocked": blocked,
        "updated": SERVER_TIMESTAMP,
    }
    db = get_db()
    ref = db.reference(f"safety/blocks/{uid_from}")
    ref.update({uid_to: data})
    status = "blocked" if blocked else "unblocked"
    return format_json(message=f"User is now {status}.")
