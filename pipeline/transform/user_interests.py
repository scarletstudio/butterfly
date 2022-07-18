from typing import List

from prefect import task

from pipeline.types import Interest, RawUserInterests, User


@task
def augment_users_with_interests(
    users: List[User], raw_interests: RawUserInterests
) -> List[User]:

    for user in users:
        interest_lst = []
        for key, value in raw_interests.get(user.uid, {}).items():
            if value:
                interest_lst.append(Interest(code=key, name=key))
        user.interests = interest_lst
    return users
