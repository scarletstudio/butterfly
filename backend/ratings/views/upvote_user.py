from ninja import Router

from backend.utils import format_json

router = Router()


@router.post("/intent_upvote")
def create_rating_intent_upvote(request):
    return format_json(message="Not yet implemented.")
