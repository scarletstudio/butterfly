from ninja import Router

from backend.utils import format_json

router = Router()


@router.post("/match_stars")
def view_rate_match(request):
    return format_json(message="Not yet implemented.")
