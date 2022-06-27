from typing import List

import prefect
from prefect import task

from pipeline.types import RawUserInterests, User


@task
def augment_users_with_interests(
    users: List[User], raw_interests: RawUserInterests
) -> List[User]:
    # TODO: Implement your transform task

    logger = prefect.context.get("logger")
    logger.info("Chris")

    return users
