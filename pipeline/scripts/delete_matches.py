import sys

sys.path.append("./")

import argparse
import datetime
from firebase_admin import db

from pipeline.utils.firebase import initialize_firebase
from pipeline.utils.matches import from_release_tag, to_release_tag

cli = argparse.ArgumentParser(description="Delete matches from Firebase.")
cli.add_argument("--community", required=True)
cli.add_argument("--release", required=True, type=from_release_tag)
cli.add_argument("--force", action="store_true")
args = cli.parse_args()


def main():
    if args.force:
        print("Proceeding with forced deletion.")
    elif args.release < datetime.datetime.now():
        print(
            (
                "You are trying to delete a past round of matches.\n"
                "Are you sure?\n"
                "This will also delete any chats from those matches.\n"
                "Use the --force flag to run this deletion."
            )
        )
        return

    # Get user-match records for the given community and release
    initialize_firebase()
    matches_ref = db.reference(f"matches/{args.community}")
    release_tag = to_release_tag(args.release)
    query = matches_ref.order_by_child("release_tag").equal_to(release_tag)
    match_records = query.get()
    print(f"Found {len(match_records)} user-match records to remove.")

    # Add chat messages from those matches to the removal set
    deleted_chats = {}
    for match in match_records.values():
        deleted_chats[match["id"]] = None

    # Only remove if records are found, otherwise, we might accidentally
    # delete all match user-records!
    if match_records:
        deleted_matches = {key: None for key in match_records}
        matches_ref.update(deleted_matches)
        print(f"Removed {len(deleted_matches)} user-match records.")
    else:
        print("No user-match records to remove.")

    if deleted_chats:
        chats_ref = db.reference(f"messages/{args.community}")
        chats_ref.update(deleted_chats)
        print(f"Removed messages for {len(deleted_chats)} chats.")
    else:
        print("No chat message records to remove.")
    print("Done.")


if __name__ == "__main__":
    main()
