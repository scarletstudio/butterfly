from ninja import Router

from backend.utils import format_json

router = Router()


@router.post("/match_stars")
def create_rating_match_stars(request):
    return format_json(message="Not yet implemented.")
