import itertools
from typing import Dict, Iterator

import pytest

from pipeline.matching.core import MatchGenerator
from pipeline.types import (
    Intent,
    IntentMatch,
    Match,
    MatchingInput,
    MatchMetadata,
    Side,
    User,
)

GENERATOR_SIMILAR_INTENTS = "similarIntentsGenerator"

# this function makes sure that any two users always have the same key (prevent duplicates)
def tup_lookup(tup):
    return f"{tup[0]},{tup[1]}" if tup[0] < tup[1] else f"{tup[1]},{tup[0]}"


class SimilarIntentsGenerator(MatchGenerator):
    def __init__(self, min_common: int = 1):
        # Minimum number of compatible intents users must have in common to be
        # eligible for a similar intents match.
        self.min_common = min_common
        super().__init__(name=GENERATOR_SIMILAR_INTENTS)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        users = inp.users
        # dictionary for all matches
        all_matches: Dict[str, Match] = {}

        # nested dictionary for all giver & seekers
        intent_to_giver_seeker_mapping: Dict[str, Dict[str, list]] = {
            intent.code: {"givers": [], "seekers": []} for intent in inp.intents
        }

        # iterate over the arr of users to store them in the intent_to_giver_seeker_mapping
        for u in users:
            # get user intents to add them to the correct list (giver or seekr)
            intents = u.intents

            for intent in intents:
                code = intent.code
                side = intent.side
                # adds the user to the appropriate list based on intent
                if side == Side.GIVING:
                    intent_to_giver_seeker_mapping[code]["givers"].append(u.uid)
                else:
                    intent_to_giver_seeker_mapping[code]["seekers"].append(
                        u.uid
                    )
        # loop to pair all giver & seekers for every intent
        for intent_code in intent_to_giver_seeker_mapping:
            dict_intent_users = intent_to_giver_seeker_mapping[intent_code]
            # creates a list of tuple pairs (giver , seeker)
            intent_pairing_list = list(
                itertools.product(
                    dict_intent_users["givers"], dict_intent_users["seekers"]
                )
            )
            # a loop to iterate through every pair O(m*n) where m and n are the number of givers and seekers respectively
            for pair in intent_pairing_list:
                # same user, skip
                if pair[1] == pair[0]:
                    continue
                intent_match = IntentMatch(
                    intent_code, seeker=pair[1], giver=pair[0]
                )
                new_match = Match(
                    users={pair[0], pair[1]},
                    metadata=MatchMetadata(
                        generator=GENERATOR_SIMILAR_INTENTS,
                        intents=[intent_match],
                    ),
                )
                key = tup_lookup(pair)
                if key in all_matches:
                    all_matches[key].metadata.intents.append(intent_match)
                else:
                    all_matches[key] = new_match

        # all matches are stored in the dictionary as values
        yield from all_matches.values()
