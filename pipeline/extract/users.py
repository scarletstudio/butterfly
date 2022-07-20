import pandas as pd
import prefect
from prefect import task

from pipeline.types import Community, RawUserCommunityMemberships

USER_COLUMN_RENAMES = {
    "latestLogin": "latest_login",
    "photoURL": "photo_url",
}


def is_active_in_community(
    memberships: RawUserCommunityMemberships, community: Community
) -> bool:
    """Checks for an active membership in the given community."""
    if not memberships:
        return False
    return memberships.get(community, {}).get("active", False)


@task
def extract_users(db, community: Community) -> pd.DataFrame:
    """Downloads all users from the database."""
    logger = prefect.context.get("logger")
    all_users = db.reference("users").get()
    # Add field for whether user has an active membership in the given community
    is_active_fn = lambda m: is_active_in_community(m, community)
    user_dicts = [
        {**user, "is_active": is_active_fn(user.get("communities", {}))}
        for user in all_users.values()
    ]
    df_users = pd.DataFrame(user_dicts)
    # Filter out users who have not logged in
    df_users = df_users[df_users.latestLogin.notna()]
    # Filter out users who are not active in the given community
    df_users = df_users[df_users.is_active]
    # Rename columns to snake case
    df_users.rename(columns=USER_COLUMN_RENAMES, inplace=True)
    # Cast latest login to integer
    df_users.latest_login = df_users.latest_login.astype(int)
    logger.info("Returned {} rows, {} cols.".format(*df_users.shape))
    return df_users
