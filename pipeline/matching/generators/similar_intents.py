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


class SimilarIntentsGenerator(MatchGenerator):
    def __init__(self, min_common: int = 1):
        # Minimum number of compatible intents users must have in common to be
        # eligible for a similar intents match.
        self.min_common = min_common
        super().__init__(name=GENERATOR_SIMILAR_INTENTS)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        users = inp.users

        all_matches: Dict[str, Match] = {}

        # iterate over the arr of users
        for anchor_user in users:
            # create Intent info from the current user
            intents = anchor_user.intents

            # users can have more than one intent, this loops through each one
            for intent in intents:
                code = intent.code
                side = intent.side
                name = intent.name

                # otherSide would be the other side of the intent that they have
                other_side = (
                    Side.GIVING if side == Side.SEEKING else Side.SEEKING
                )

                # create an Intent object to search for in the other users
                otherIntent = Intent(code, other_side, name)

                for inner_user in users:
                    if otherIntent in inner_user.intents:

                        # create the intent match after finding a user that matches
                        intent_match = IntentMatch(
                            code,
                            seeker=inner_user.uid
                            if otherIntent.side == Side.SEEKING
                            else anchor_user.uid,
                            giver=inner_user.uid
                            if otherIntent.side == Side.GIVING
                            else anchor_user.uid,
                        )

                        # key contains the user ids that have matched
                        key = get_lookup(anchor_user.uid, inner_user.uid)
                        # checks if the users have been matched, prevents duplicates
                        if key in all_matches:
                            # additional check if the users have NOT matched on this intent and appends it to the matchingIntents
                            if (
                                intent_match
                                not in all_matches[key].metadata.matchingIntents
                            ):
                                all_matches[
                                    key
                                ].metadata.matchingIntents.append(intent_match)
                        else:
                            new_match = Match(
                                users={anchor_user.uid, inner_user.uid},
                                metadata=MatchMetadata(
                                    generator=GENERATOR_SIMILAR_INTENTS,
                                    matchingIntents=[intent_match],
                                ),
                            )
                            all_matches[key] = new_match

        # all matches are stored in the dictionary as values
        yield from all_matches.values()