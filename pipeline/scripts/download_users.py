import sys

sys.path.append("./")

import argparse
import pandas as pd
from firebase_admin import db

from pipeline.utils.firebase import initialize_firebase


cli = argparse.ArgumentParser(description="Read users from Firebase.")
cli.add_argument("--outfile", default="data/raw_users.csv")
args = cli.parse_args()


def main():
    # Fetch users and store in DataFrame
    initialize_firebase()
    all_users = db.reference("users").get()
    df_users = pd.DataFrame(all_users.values())

    # Filter out users who have not logged in
    df_users = df_users[df_users.latestLogin.notna()]
    df_users.to_csv(args.outfile, index=False)
    msg = "Wrote {} rows, {} cols to: {}"
    print(msg.format(*df_users.shape, args.outfile))


if __name__ == "__main__":
    main()
