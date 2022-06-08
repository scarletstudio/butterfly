import pandas as pd
import prefect
from prefect import task

from pipeline.types import Community


@task
def extract_users(db, Community: str) -> pd.DataFrame:
    """Downloads all users from the database."""
    logger = prefect.context.get("logger")
    all_users = db.reference("users").get()
    df_users = pd.DataFrame(all_users.values())
    # Filter out users who have not logged in
    df_users = df_users[df_users.latestLogin.notna()]
    logger.info("Returned {} rows, {} cols.".format(*df_users.shape))
    return df_users