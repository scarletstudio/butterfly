from typing import List

import prefect
from prefect import task

from pipeline.types import Community, IntentUpvote, MatchStars


def extract_rating(db, community: Community, name: str, RatingSchema) -> List:
    """Helper function to extract rating records."""
    logger = prefect.context.get("logger")
    ref = db.reference(f"ratings/{name}/{community}")
    raw = ref.get()
    if not raw:
        return []
    res = []
    for record in raw.values():
        try:
            user_list = record.get("users", [])
            fields = {
                **record,
                "users": set(user_list),
                "community": community,
            }
            rating = RatingSchema(**fields)
            res.append(rating)
        except Exception as err:
            logger.warning(f"Invalid {name} rating record:\n{err}\n{record}")
    return res


@task
def extract_match_stars(db, community: Community) -> List[MatchStars]:
    return extract_rating(db, community, "match_stars", MatchStars)


@task
def extract_intent_upvotes(db, community: Community) -> List[IntentUpvote]:
    return extract_rating(db, community, "intent_upvotes", IntentUpvote)
