from dataclasses import dataclass

from pipeline.types.intent import IntentCode
from pipeline.types.user import UserId


@dataclass
class IntentMatch:
    code: IntentCode
    giver: UserId
    seeker: UserId
