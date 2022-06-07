from typing import Dict

from pipeline.types.intent import IntentCode, Side
from pipeline.types.interest import InterestCode
from pipeline.types.user import UserId

# Two-level dictionary that indicates which interests a user selected
RawUserInterests = Dict[UserId, Dict[InterestCode, bool]]
# Three-level dictionary that indicates which intents a user selected
RawUserIntents = Dict[UserId, Dict[IntentCode, Dict[Side, bool]]]
