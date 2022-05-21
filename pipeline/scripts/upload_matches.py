import sys

sys.path.append("./")

import argparse
import ast
import pandas as pd
from firebase_admin import db

from pipeline.matching import Match
from pipeline.utils.firebase import initialize_firebase
from pipeline.utils.matches import from_release_tag, to_release_tag


cli = argparse.ArgumentParser(description="Write matches to Firebase.")
cli.add_argument("--infile", default="data/matches.csv")
args = cli.parse_args()

MS = 1000


def main():
    # Read matches into dataclass values
    df_matches = pd.read_csv(args.infile)
    msg = "Read {} rows, {} cols from: {}"
    print(msg.format(*df_matches.shape, args.infile))
    df_matches["users"] = df_matches["users"].apply(ast.literal_eval)
    df_matches["release"] = df_matches["release"].apply(from_release_tag)
    match_dicts = df_matches.to_dict(orient="records")
    matches = [Match(**m) for m in match_dicts]

    # Build match records for each user
    res = {}
    for m in matches:
        release_tag = to_release_tag(m.release)
        release_ts = m.release.timestamp() * MS
        participants = {other_uid: True for other_uid in m.users}
        match_id = f"{release_tag}~{m.key}"
        for my_uid in m.users:
            combo_id = f"{match_id}~{my_uid}"
            path = f"{m.community}/{combo_id}"
            record = {
                "for": my_uid,
                "participants": participants,
                "release_tag": release_tag,
                "release_timestamp": release_ts,
                "title": m.title,
                "id": match_id,
            }
            res[path] = record
    print(f"Generated {len(res)} user-match records.")

    # Write matches to Firebase
    initialize_firebase()
    matches_ref = db.reference("matches")
    matches_ref.update(res)
    print("Done.")


if __name__ == "__main__":
    main()
