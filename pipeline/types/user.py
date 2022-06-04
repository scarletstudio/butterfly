from dataclasses import dataclass
from typing import Tuple

UserId = str
UserGroup = Tuple[UserId, ...]


@dataclass
class User:
    uid: UserId
    displayName: str
