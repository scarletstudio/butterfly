import dataclasses
import pandas as pd
from matching import User, get_matches, validate_matches

INFILE_RAW_USERS = "data/raw_users.csv"


def main():
  # Read users downloaded from Firebase
  raw_users = pd.read_csv(INFILE_RAW_USERS)
  print(f"Read {len(raw_users)} users.")

  # Convert user DataFrame to dataclass records
  field_names = [f.name for f in dataclasses.fields(User)]
  user_dicts = raw_users[field_names].to_dict(orient="records")
  users = [User(**u) for u in user_dicts]

  # Generate and validate matches
  print("Generating next round of matches...")
  recent_matches = []
  matches = get_matches(users, recent_matches)
  names = {u.uid: u.displayName for u in users}
  for m in matches:
    match_names = ", ".join([names[uid] for uid in m.users])
    print(f"\t{match_names}")
  validate_matches(matches, users, recent_matches)
  print("Done.")


if __name__ == "__main__":
  main()
