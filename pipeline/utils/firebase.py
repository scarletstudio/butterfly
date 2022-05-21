import firebase_admin
from decouple import Config, RepositoryEnv
from firebase_admin import credentials


def initialize_firebase():
    # Read from .env.firebase in root folder instead of local .env file
    DOTENV = ".env.firebase"
    config = Config(RepositoryEnv(DOTENV))

    # Initialize Firebase Admin service account
    cred = credentials.Certificate("credentials.json")
    firebase_admin.initialize_app(
        cred, {"databaseURL": config.get("VITE_firebase_databaseURL")}
    )
