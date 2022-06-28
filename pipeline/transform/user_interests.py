from typing import List

import prefect
from prefect import task

from pipeline.types import Interest, RawUserInterests, User


@task
def augment_users_with_interests(
    users: List[User], raw_interests: RawUserInterests
) -> List[User]:

    logger = prefect.context.get("logger")
    logger.info(
        "Finished issues #103 & #194 (Chris); wrote additional test cases as well"
    )

    # TODO: Implement your transform task

    for user in users:

        interest_lst = []

        try:

            for key, value in raw_interests[user.uid].items():

                if value:

                    interest_lst.append(Interest(code=key, name=key))

                    user.interests = interest_lst

        except KeyError:

            break

    return users
