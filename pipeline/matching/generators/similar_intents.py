from typing import Iterator

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


class SimilarIntentsGenerator(MatchGenerator):
    def __init__(self, min_common: int = 0):
        # Minimum number of compatible intents users must have in common to be
        # eligible for a similar intents match.
        self.min_common = min_common
        super().__init__(name=GENERATOR_SIMILAR_INTENTS)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        # TODO: Implement your generator
        # inp.logger.info("Lauren")

        users = inp.users
        # print(users)
        match = False

        match_list = []

        # iterate over the arr of users
        for idx, u in enumerate(users):
            # take Intent info from the current user
            intents = u.intents
            intent = intents[0]
            code = intent.code
            side = intent.side
            name = intent.name

            # o therSide would be the other side of the intent that they have
            if side == Side.GIVING:
                otherSide = Side.SEEKING
            elif side == Side.SEEKING:
                otherSide = Side.GIVING
            else:
                otherSide = Side.BLANK

            # create an Intent object to search for in the other users
            otherIntent = Intent(code, otherSide, name)

            for oth in users:
                if otherIntent in oth.intents:
                    # create the intent match after finding a user that matches
                    intent_match = IntentMatch(
                        code,
                        seeker=oth.uid
                        if otherIntent.side == Side.SEEKING
                        else u.uid,
                        giver=oth.uid
                        if otherIntent.side == Side.GIVING
                        else u.uid,
                    )

                    # create a Match
                    new_match = Match(
                        users={u.uid, oth.uid},
                        metadata=MatchMetadata(
                            generator=GENERATOR_SIMILAR_INTENTS,
                            score=1,
                            matchingIntents=[intent_match],
                        ),
                    )

                    # check if the match already exists before appending it
                    if new_match in match_list:
                        continue
                    else:
                        match_list.append(new_match)

            # check that a match was found
            # if so, create a Match and place the two users in the Match
            # if not, use another intent from the first user and search again

        yield from match_list
