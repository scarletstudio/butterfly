from dataclasses import dataclass, field
from typing import List

from pipeline.types.intent_match import IntentMatch
from pipeline.types.interest import InterestCode
from pipeline.types.schedule import Availability

GeneratorId = str


@dataclass
class MatchMetadata:
    """
    Schema to hold additional information about a match.

    Use cases:
    - Additional information from the generator that proposed the match
    - Information needed to rank a proposed match
    - Information needed to display information about this match in the app

    Notes:
    - By convention, field names should use camelCase because they may be used
      in the app
    - Every field should have a default value so that it can be ignored in cases
      where it is not used.
    - Callers should validate that the field they want to use is correctly
      populated before using it.
    - This data will be loaded to the database, so only types that can be saved
      as JSON are allowed. For example, use List instead of Set.
    """

    # ID of the generator proposed this match
    generator: GeneratorId = "blank"
    # Score assigned to this match for ranking purposes
    score: float = 0
    # Letters in common in the names of matched users
    commonLetters: List[str] = field(default_factory=list)
    # Codes of interests relevant to this match
    interests: List[InterestCode] = field(default_factory=list)
    # Information about the intents relevant to this match
    intents: List[IntentMatch] = field(default_factory=list)
    # Days/times when matched users are both available
    availability: List[Availability] = field(default_factory=list)
    # Codes of interests shared between the matched users
    # TODO(#259): Deprecate this field, use `interests` instead
    commonInterests: List[InterestCode] = field(default_factory=list)
    # Similar to commonInterests, but where the interests are rare
    # TODO(#259): Deprecate this field, use `interests` instead
    rareInterests: List[InterestCode] = field(default_factory=list)
    # Information about the compatible intents between the matched users
    # TODO(#259): Deprecate this field, use `intents` instead
    matchingIntents: List[IntentMatch] = field(default_factory=list)
    # Similar to matchingIntents, but where the intent is rare
    # TODO(#259): Deprecate this field, use `intents` instead
    rareIntents: List[IntentMatch] = field(default_factory=list)
    # Days/times when matched users are both available
    # TODO(#259): Deprecate this field, use `availability` instead
    matchingAvailability: List[Availability] = field(default_factory=list)
    # Similar to matchingAvailability, but where availability is limited
    # TODO(#259): Deprecate this field, use `availability` instead
    limitedAvailability: List[Availability] = field(default_factory=list)
