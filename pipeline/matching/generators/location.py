import itertools
import math
from typing import Iterator, List

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput, MatchMetadata, User

GENERATOR_LOCATION = "locationGenerator"


class LocationGenerator(MatchGenerator):
    def __init__(self):  # , min_common: int = 0):
        # Minimum number of interests users must have in common to be eligible
        # for a similar interests match.
        # self.min_common = min_common  # don't know if I need
        super().__init__(name=GENERATOR_LOCATION)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        # dorm "coordinates"
        dorms = {
            "Kacek": "2x3",
            "Cunningham": "2x3",
            "Carman": "2x3",
            "Gunsaulus": "2x3",
            "McCormick Student Village": "2x2",
            "Rowe Village": "1x1",
            "The Quad": "2x1",
            "Off-Campus": "0x0",
        }
        # store same location matches
        matches: List[Match] = []
        # stores other matches
        otherMatches: List[Match] = []
        # closest location to the current user
        closestLoc = User(uid="None", displayName="None", location="None")
        # the distance between two users
        score = 0.0

        # if there in an odd number of user the last user will get assigned to lastUser
        # other will remain as a "None" user
        lastUser = User(uid="None", displayName="None", location="None")

        if len(inp.users) % 2 == 1:
            lastUser = inp.users[-1]
            del inp.users[-1]

        # checks for users that are in the same building
        for i in range(len(inp.users)):
            for j in range(i, len(inp.users)):
                if inp.users[i].location == inp.users[j].location:
                    matches.append(
                        Match(
                            users={inp.users[i].uid, inp.users[j].uid},
                            metadata=MatchMetadata(
                                generator=GENERATOR_LOCATION,
                                score=0.0,
                                location=[inp.users[i].location],
                            ),
                        )
                    )
                    # if there is a match delete the second user after creating the match
                    del inp.users[j]

        for i in range(len(inp.users)):
            for j in range(i, len(inp.users)):
                fstULoc = inp.users[i].location
                sndULoc = inp.users[j].location
                dist = math.sqrt(
                    pow(int(fstULoc[0]) - int(sndULoc[0]), 2)
                    + pow(int(fstULoc[2:]) - int(sndULoc[2:]), 2)
                )

                if dist < score:
                    closestLoc = inp.users[j]
                    score = dist

                otherMatches.append(
                    Match(
                        users={inp.users[i].uid, inp.users[j].uid},
                        metadata=MatchMetadata(
                            generator=GENERATOR_LOCATION,
                            score=score,
                            location=[fstULoc, sndULoc],
                        ),
                    )
                )

                inp.users.remove(closestLoc)

        matches += otherMatches

        # # different combinations from the list of users
        # userPairs = list(itertools.combinations(inp.users, r=2))

        # idx = 0
        # # checking for pairs with the same location and appending them to the list (matches)
        # for fstUser, sndUser in userPairs:
        #     if fstUser.location == sndUser.location:
        #         metadata = MatchMetadata(
        #             generator=GENERATOR_LOCATION,
        #             score=1.0,
        #             location=[fstUser.location, sndUser.location],
        #         )
        #         matches.append(
        #             Match(users={fstUser.uid, sndUser.uid}, metadata=metadata)
        #         )

        #         # elif (
        #         #     abs(fstLoc[0] - sndLoc[0]) <= 1
        #         #     and abs(fstLoc[2:] - sndLoc[2:]) <= 1
        #         # ):
        #         #     metadata = MatchMetadata(
        #         #         generator=GENERATOR_LOCATION,
        #         #         score=1.0,  # NEED TO FIX
        #         #         location=[fstUser.location, sndUser.location],
        #         #     )
        #         #     matches.append(
        #         #         Match(users={fstUser.uid, sndUser.uid}, metadata=metadata)
        #         #     )

        #         # if the locations match, delete every other pair in userPairs that contains either user
        #         for i in userPairs:
        #             if i.__contains__(fstUser) or i.__contains__(sndUser):
        #                 userPairs.remove(i)

        # #print(matches)

        # # checking for pairs with close locations and appending them to the list (matches)
        # for fstUser, sndUser in userPairs:
        #     # location based off of user's dorm building
        #     fstLoc = dorms[fstUser.location]
        #     sndLoc = dorms[sndUser.location]
        #     if (
        #         abs(int(fstLoc[0]) - int(sndLoc[0])) <= 1
        #         and abs(int(fstLoc[2:]) - int(sndLoc[2:])) <= 1
        #     ):
        #         metadata = MatchMetadata(
        #             generator=GENERATOR_LOCATION,
        #             score=1.0,  # NEED TO FIX
        #             location=[fstUser.location, sndUser.location],
        #         )
        #         matches.append(
        #             Match(users={fstUser.uid, sndUser.uid}, metadata=metadata)
        #         )
        #         # if the locations are close enough, delete every other pair in userPairs that contains either user
        #         for i in userPairs:
        #             if i.__contains__(fstUser) or i.__contains__(sndUser):
        #                 userPairs.remove(i)

        # #print(matches)

        # # appending the rest of the matches with far locations to the list (matches)
        # for fstUser, sndUser in userPairs:
        #     metadata = MatchMetadata(
        #         generator=GENERATOR_LOCATION,
        #         score=1.0,  # NEED TO FIX
        #         location=[fstUser.location, sndUser.location],
        #     )
        #     matches.append(
        #         Match(users={fstUser.uid, sndUser.uid}, metadata=metadata)
        #     )
        #     # delete every other pair in userPairs that contains either user
        #     for i in userPairs:
        #         if i.__contains__(fstUser) or i.__contains__(sndUser):
        #             userPairs.remove(i)
        # print(matches)

        for m in matches:
            yield m
