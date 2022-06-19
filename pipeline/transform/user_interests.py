from typing import List

from prefect import task

from pipeline.types import RawUserInterests, User


@task
def augment_users_with_interests(
    users: List[User], raw_interests: RawUserInterests
) -> List[User]:
    # TODO: Implement your transform task
    return users
