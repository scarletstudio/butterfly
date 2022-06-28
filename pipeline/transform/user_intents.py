from typing import List

from prefect import task

from pipeline.types import RawUserIntents, User


@task
def augment_users_with_intents(
    users: List[User], raw_intents: RawUserIntents
) -> List[User]:
    # TODO: Implement your transform task
    import prefect

    logger = prefect.context.get("logger")
    logger.info("Azu was here!")
    return users
