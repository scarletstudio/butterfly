from typing import List

import prefect
from prefect import task

from pipeline.types import Intent, RawUserIntents, Side, User


@task
def augment_users_with_intents(
    users: List[User], raw_intents: RawUserIntents
) -> List[User]:
    # TODO: Implement your transform task
    logger = prefect.context.get("logger")
    logger.info("Azu was here!")
    intent = Intent(code="tutoring", side=Side.SEEKING, name="tutoring")
    intent2 = Intent(code="tutoring", side=Side.GIVING, name="tutoring")
    return [
        User(uid="1", displayName="A", intents=[intent]),
        User(uid="2", displayName="B", intents=[intent, intent2]),
    ]
