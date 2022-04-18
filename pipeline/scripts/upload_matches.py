import sys
sys.path.append("./")

import argparse
import ast
import pandas as pd
from firebase_admin import db

from pipeline.matching import Match
from pipeline.utils.firebase import initialize_firebase


cli = argparse.ArgumentParser(description="Write matches to Firebase.")
cli.add_argument("--infile", default="data/matches.csv")
args = cli.parse_args()


def main():
  # Read matches into dataclass values
  df_matches = pd.read_csv(args.infile)
  msg = "Read {} rows, {} cols from: {}"
  print(msg.format(*df_matches.shape, args.infile))
  df_matches["users"] = df_matches["users"].apply(ast.literal_eval)
  match_dicts = df_matches.to_dict(orient="records")
  matches = [Match(**m) for m in match_dicts]

  # Build match records for each user
  res = {}
  for m in matches:
    for my_uid in m.users:
      match_id = f"{m.release}~{m.key}"
      combo_id = f"{match_id}~{my_uid}"
      path = f"{m.community}/{combo_id}"
      participants = {
        other_uid: True
        for other_uid in m.users
      }
      record = {
        "for": my_uid,
        "participants": participants,
        "release": m.release,
        "id": match_id
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
