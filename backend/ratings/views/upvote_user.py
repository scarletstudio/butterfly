from ninja import Router

from backend.utils import format_json

router = Router()


@router.post("/intent_upvote")
def view_upvote_user(request):
    return format_json(message="Not yet implemented.")
