import functools
import json
import os
from typing import Callable

import firebase_admin
from environ import Env
from firebase_admin import credentials, db


def initialize_firebase_for_api():
    # Reads from backend/.env if local API is started from backend/
    # Reads from configured environment variables in production deployment
    env = Env()
    env.read_env()
    database_url = env("API_DATABASE_URL")
    admin_credentials = env("API_ADMIN_CREDENTIALS")

    # Parse and write credentials to file
    credentials_outfile = "api-credentials.json"
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


def with_db(func: Callable):
    """Gives a function the Firebase database as its first argument."""

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return func(db, *args, **kwargs)

    return wrapper
