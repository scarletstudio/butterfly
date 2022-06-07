from typing import List

from prefect import task

from pipeline.types import Community, IntentUpvote, MatchStars


@task
def extract_match_stars(db, community: Community) -> List[MatchStars]:
    ref = db.reference(f"ratings/match_stars/{community}")
    raw = ref.get()
    if not raw:
        return []
    res = []
    for v in raw.values():
        rating = MatchStars(
            from_user=v.get("fromUser", ""),
            value=v.get("value", 0),
            match=v.get("match", ""),
            users=set(v.get("users", [])),
            generator=v.get("generator", ""),
        )
        res.append(rating)
    return res


@task
def extract_intent_upvotes(db, community: Community) -> List[IntentUpvote]:
    ref = db.reference(f"ratings/intent_upvotes/{community}")
    raw = ref.get()
    if not raw:
        return []
    res = []
    for v in raw.values():
        rating = IntentUpvote(
            from_user=v.get("fromUser", ""),
            to_user=v.get("toUser", ""),
            value=v.get("value", 0),
            intent=v.get("intent", ""),
            match=v.get("match", ""),
            users=set(v.get("users", [])),
            generator=v.get("generator", ""),
        )
        res.append(rating)
    return res
