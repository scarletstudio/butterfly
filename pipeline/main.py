import sys
sys.path.append("./")

import argparse
import ast
import dataclasses
import pandas as pd

from pipeline.matching import (
  Match,
  User,
  best_effort_minimize_repeat_matches,
  get_matches,
  validate_matches,
)
from pipeline.utils.matches import generate_keys, from_release_tag


cli = argparse.ArgumentParser(description="Generate matches for users.")
cli.add_argument("--infile_users", default="data/raw_users.csv")
cli.add_argument("--infile_recent_matches", default="data/recent_matches.csv")
cli.add_argument("--outfile_matches", default="data/matches.csv")
cli.add_argument("--matching_retries", default=3, type=int)
cli.add_argument("--community", required=True, type=str)
cli.add_argument("--release", required=True, type=from_release_tag)
args = cli.parse_args()


def main():
  # Read users downloaded from Firebase
  df_users = pd.read_csv(args.infile_users)
  print(f"Read {len(df_users)} users.")

  # Convert user DataFrame to dataclass records
  field_names = [f.name for f in dataclasses.fields(User)]
  user_dicts = df_users[field_names].to_dict(orient="records")
  users = [User(**u) for u in user_dicts]

  # Read recent matches downloaded from Firebase
  df_recent_matches = pd.read_csv(args.infile_recent_matches)
  df_recent_matches["users"] = df_recent_matches["users"].apply(ast.literal_eval)
  df_recent_matches["release"] = df_recent_matches["release"].apply(from_release_tag)
  print(f"Read {len(df_recent_matches)} recent matches.")

  # Filter to only matches from before the current release
  df_recent_matches = df_recent_matches[df_recent_matches["release"] < args.release]
  print(f"Filtered to {len(df_recent_matches)} recent matches.")

  # Convert recent matches DataFrame to dataclass records
  field_names = [f.name for f in dataclasses.fields(Match)]
  recent_match_dicts = df_recent_matches[field_names].to_dict(orient="records")
  recent_matches = [Match(**u) for u in recent_match_dicts]

  # Wrap function with retry handler
  with_retries = best_effort_minimize_repeat_matches(n_retries=args.matching_retries)
  get_matches_with_retries = with_retries(get_matches)

  # Generate and validate matches
  print("Generating next round of matches...")
  matches = get_matches_with_retries(users, recent_matches)
  names = {u.uid: u.displayName for u in users}
  for m in matches:
    match_names = ", ".join([names[uid] for uid in m.users])
    print(f"\t{match_names}")
  validate_matches(matches, users, recent_matches)

  # Write out matches
  df_matches = pd.DataFrame(matches)
  df_matches["community"] = args.community
  df_matches["release"] = args.release
  df_matches["key"] = generate_keys(n=len(df_matches))
  df_matches["title"] = "Your Match"
  df_matches.to_csv(args.outfile_matches, index=False)
  msg = "Wrote {} rows, {} cols to: {}"
  print(msg.format(*df_matches.shape, args.outfile_matches))
  print("Done.")


if __name__ == "__main__":
  main()
