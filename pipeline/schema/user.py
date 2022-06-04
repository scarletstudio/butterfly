from dataclasses import dataclass

UserId = str


@dataclass
class User:
    uid: UserId
    displayName: str
