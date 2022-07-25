from ninja import Router, Schema

from backend.ratings.views.utils import create_rating

router = Router()


class MatchStarsData(Schema):
    """Refer to pipeline/types/rating.py"""

    from_user: str
    value: int
    community: str
    match: str
    users: list
    generator: str


class IntentUpvoteData(Schema):
    """Refer to pipeline/types/rating.py"""

    from_user: str
    to_user: str
    value: int
    intent: str
    community: str
    match: str
    users: list
    generator: str


@router.post("/match_stars")
def create_rating_match_stars(request, rating: MatchStarsData):
    return create_rating("match_stars", rating, {1, 2, 3, 4, 5})


@router.post("/intent_upvote")
def create_rating_intent_upvote(request, rating: IntentUpvoteData):
    return create_rating("intent_upvote", rating, {0, 1})
