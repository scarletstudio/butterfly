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
def get_lookup(u1, u2):
    return f"{u1},{u2}" if u1 < u2 else f"{u2},{u1}"


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

        all_matches: Dict[str, Match] = {}

        pairings: Dict[Intent, list] = {}
        # nested dictionary
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
                # name = intent.name
                # adds the user to the appropriate list based on intent
                if side == Side.GIVING:
                    intent_to_giver_seeker_mapping[code]["givers"].append(u.uid)
                else:
                    intent_to_giver_seeker_mapping[code]["seekers"].append(
                        u.uid
                    )

        for intent_code in intent_to_giver_seeker_mapping:
            dict_intent_users = intent_to_giver_seeker_mapping[intent_code]
            # creates a list of tuple pairs (giver , seeker) O(m*n)
            intent_pairing_list = list(
                itertools.product(
                    dict_intent_users["givers"], dict_intent_users["seekers"]
                )
            )
            # O(k) k < m and k < n
            for pair in intent_pairing_list:
                intent_match = IntentMatch(
                    intent_code, seeker=pair[1], giver=pair[0]
                )
                new_match = Match(
                    users={pair[0], pair[1]},
                    metadata=MatchMetadata(
                        generator=GENERATOR_SIMILAR_INTENTS,
                        score=1,
                        matchingIntents=[intent_match],
                    ),
                )
                key = tup_lookup(pair)
                if key in all_matches:
                    all_matches[key].metadata.matchingIntents.append(
                        intent_match
                    )
                else:
                    all_matches[key] = new_match

        breakpoint()
        # # otherSide would be the other side of the intent that they have
        # other_side = (
        #     Side.GIVING if side == Side.SEEKING else Side.SEEKING
        # )

        # # create an Intent object to search for in the other users
        # otherIntent = Intent(code, other_side, name)

        # for oth in users:
        #     if otherIntent in oth.intents:

        #         # create the intent match after finding a user that matches
        #         intent_match = IntentMatch(
        #             code,
        #             seeker=oth.uid
        #             if otherIntent.side == Side.SEEKING
        #             else u.uid,
        #             giver=oth.uid
        #             if otherIntent.side == Side.GIVING
        #             else u.uid,
        #         )

        #         # key contains the user ids that have matched
        #         key = get_lookup(u.uid, oth.uid)
        #         # checks if the users have been matched, prevents duplicates
        #         if key in all_matches:
        #             # additional check if the users have NOT matched on this intent and appends it to the matchingIntents
        #             if (
        #                 intent_match
        #                 not in all_matches[key].metadata.matchingIntents
        #             ):
        #                 all_matches[
        #                     key
        #                 ].metadata.matchingIntents.append(intent_match)
        #         else:
        #             new_match = Match(
        #                 users={u.uid, oth.uid},
        #                 metadata=MatchMetadata(
        #                     generator=GENERATOR_SIMILAR_INTENTS,
        #                     score=1,
        #                     matchingIntents=[intent_match],
        #                 ),
        #             )
        #             all_matches[key] = new_match

        # all matches are stored in the dictionary as values
        yield from all_matches.values()
