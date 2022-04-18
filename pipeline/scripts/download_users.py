"""
Download user details from Firebase.
"""

import firebase_admin
import pandas as pd
from decouple import Config, RepositoryEnv
from firebase_admin import credentials, db


# Read from .env.firebase in root folder instead of local .env file
DOTENV = '.env.firebase'
config = Config(RepositoryEnv(DOTENV))

# Initialize Firebase Admin service account
cred = credentials.Certificate("credentials.json")
firebase_admin.initialize_app(cred, {
  "databaseURL": config.get("VITE_firebase_databaseURL")
})

OUTFILE = "data/raw_users.csv"


def main():
  all_users = db.reference("users").get()
  users = pd.DataFrame(all_users.values())
  users.to_csv(OUTFILE, index=False)


if __name__ == "__main__":
  main()
