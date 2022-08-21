from typing import List

import prefect
from prefect import task

from pipeline.types import Intent, RawUserIntents, Side, User


@task
def augment_users_with_intents(
    users: List[User], raw_intents: RawUserIntents
) -> List[User]:

    for user in users:
        intents_lst = []
        user_intents_dict = raw_intents.get(user.uid, {})
        for key, intents_dict in user_intents_dict.items():
            for side, value in intents_dict.items():
                if not value:
                    continue
                if side == Side.SEEKING.value:
                    intents_lst.append(
                        Intent(code=key, side=Side.SEEKING, name=key)
                    )
                if side == Side.GIVING.value:
                    intents_lst.append(
                        Intent(code=key, side=Side.GIVING, name=key)
                    )
        user.intents = intents_lst
    return users
