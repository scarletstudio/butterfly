import sys

sys.path.append("./")

import argparse
import pandas as pd
from firebase_admin import db

from pipeline.matching import Match
from pipeline.utils.firebase import initialize_firebase
from pipeline.utils.matches import from_release_tag


cli = argparse.ArgumentParser(description="Read recent matches from Firebase.")
cli.add_argument("--outfile", default="data/recent_matches.csv")
cli.add_argument("--community", required=True)
args = cli.parse_args()


def main():
    # Fetch users and store in DataFrame
    initialize_firebase()
    matches_ref = db.reference(f"matches/{args.community}")
    user_match_records = matches_ref.get()
    print(f"Downloaded {len(user_match_records)} user-match records.")

    # Convert user-match records to match records
    seen_match_ids = set()
    recent_match_records = []
    for record in user_match_records.values():
        match_key = record["id"]
        if match_key in seen_match_ids:
            continue
        seen_match_ids.add(match_key)
        match = Match(
            users={uid for uid in record["participants"]},
            community=args.community,
            release=from_release_tag(record["release_tag"]),
            key=match_key,
            title=record["title"],
        )
        recent_match_records.append(match)
    print(f"Converted to {len(recent_match_records)} match records.")

    df_recent_matches = pd.DataFrame(recent_match_records)
    df_recent_matches.to_csv(args.outfile, index=False)
    msg = "Wrote {} rows, {} cols to: {}"
    print(msg.format(*df_recent_matches.shape, args.outfile))


if __name__ == "__main__":
    main()
