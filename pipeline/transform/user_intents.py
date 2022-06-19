from typing import List

from pipeline.types import RawUserIntents, User


def augment_users_with_intents(
    users: List[User], raw_intents: RawUserIntents
) -> List[User]:
    # TODO: Implement your transform task
    return users
