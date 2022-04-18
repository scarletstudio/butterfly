import sys
sys.path.append("./")

import argparse
from firebase_admin import db

from pipeline.utils.firebase import initialize_firebase


cli = argparse.ArgumentParser(description="Delete matches from Firebase.")
cli.add_argument("--community", required=True)
cli.add_argument("--release", required=True)
args = cli.parse_args()


def main():
  # Get user-match records for the given community and release
  initialize_firebase()
  matches_ref = db.reference(f"matches/{args.community}")
  query = matches_ref.order_by_child("release").equal_to(args.release)
  res = query.get()
  print(f"Found {len(res)} user-match records to remove.")

  # Delete matches from Firebase
  deleted_res = {key: None for key in res}
  matches_ref.update(deleted_res)
  print("Done.")


if __name__ == "__main__":
  main()
