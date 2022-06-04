import json
import os

import firebase_admin
from decouple import Config, RepositoryEnv
from firebase_admin import credentials, db
from prefect import task


def initialize_firebase():
    # Read from .env.firebase in root folder instead of local .env file
    DOTENV = ".env.firebase"
    config = Config(RepositoryEnv(DOTENV))

    # Initialize Firebase Admin service account
    cred = credentials.Certificate("credentials.json")
    firebase_admin.initialize_app(
        cred, {"databaseURL": config.get("VITE_firebase_databaseURL")}
    )


@task
def initialize_firebase_for_prefect(database_url: str, admin_credentials: str):
    # Parse and write credentials to file
    credentials_outfile = "prefect-credentials.json"
    raw = str(admin_credentials).replace("'", '"').replace("^", " ")
    parsed = json.loads(raw)
    content = json.dumps(parsed, indent=4)
    with open(credentials_outfile, "w+") as file:
        file.write(content)

    # Initialize Firebase Admin service account
    cred = credentials.Certificate(credentials_outfile)
    firebase_admin.initialize_app(cred, {"databaseURL": database_url})

    # After initialization, delete raw credentials file
    if os.path.exists(credentials_outfile):
        os.remove(credentials_outfile)
    return db
