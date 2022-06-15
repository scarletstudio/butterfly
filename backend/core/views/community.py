from backend.utils import SERVER_TIMESTAMP, format_json, with_db


@with_db
def view_join_community(db, request, community: str, uid: str):
    """Add a given user to a given community."""
    if request.method != "POST":
        return format_json(status=405, error="Only supported for POST.")

    user = db.reference(f"users/{uid}").get()
    if not user:
        return format_json(status=404, error=f"No user for ID: {uid}")

    # If the user has already joined this community, do not update their data.
    communities = user.get("communities", {})
    if community in communities:
        return format_json(message="Already joined this community.")

    # If user is active in any other communities, start them as inactive in the
    # community they just joined.
    is_already_active = any(
        c.get("active", False) for c in communities.values()
    )

    joined = {"active": not is_already_active, "joined": SERVER_TIMESTAMP}
    db.reference(f"users/{uid}/communities/{community}").set(joined)

    return format_json(message="Successfully joined the community!")
