import sys

sys.path.insert(0, "/workspace/butterfly/backend/utils/")
from firebase import get_db, initialize_firebase_for_api

initialize_firebase_for_api()


def average_rating():
    community = "sds"
    db = get_db()
    ref = db.reference(f"ratings/match_stars/{community}/")
    ratings = ref.get()
    matches = list(ratings.values())
    totals = dict()
    count = dict()
    averages = dict()
    for match in matches:
        totals[match["from_user"]] = match["value"] + totals.get(
            match["from_user"], 0
        )
        count[match["from_user"]] = 1 + count.get(match["from_user"], 0)
    keys = list(totals.keys())
    for i in range(len(totals)):
        averages[keys[i]] = totals[keys[i]] / count[keys[i]]
    return averages


average_rating()
