import itertools
import math
from typing import Iterator

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput, MatchMetadata, User

GENERATOR_LOCATION = "locationGenerator"


class LocationGenerator(MatchGenerator):
    def __init__(self):
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
        # # store same location matches
        # matches: List[Match] = []
        # # stores other matches
        # otherMatches: List[Match] = []
        # closest user to the current user
        closestUser = User(uid="None", displayName="None", location="None")
        # current user
        currUser = User(uid="None", displayName="None", location="None")
        # the distance between two users
        score = 10.0
        flag = False

        # if there in an odd number of user the last user will get assigned to lastUser
        # other will remain as a "None" user
        lastUser = User(uid="None", displayName="None", location="None")

        if len(inp.users) % 2 == 1:
            lastUser = inp.users[-1]
            del inp.users[-1]

        userPairs = list(itertools.combinations(inp.users, r=2))

        for fstUser, sndUser in userPairs:
            if fstUser.location == sndUser.location:
                if (
                    lastUser.uid == "None"
                    or fstUser.location != lastUser.location
                ):
                    yield Match(
                        users={fstUser.uid, sndUser.uid},
                        metadata=MatchMetadata(
                            generator=GENERATOR_LOCATION,
                            score=0.0,
                            location=[fstUser.location, sndUser.location],
                        ),
                    )

                elif fstUser.location == lastUser.location:
                    yield Match(
                        users={fstUser.uid, sndUser.uid, lastUser.uid},
                        metadata=MatchMetadata(
                            generator=GENERATOR_LOCATION,
                            score=0.0,
                            location=[
                                fstUser.location,
                                sndUser.location,
                                lastUser.location,
                            ],
                        ),
                    )
                    lastUser = User(
                        uid="None", displayName="None", location="None"
                    )

                userPairs = [
                    users
                    for users in userPairs
                    if users[0] != fstUser and users[1] != fstUser
                ]
                userPairs = [
                    users
                    for users in userPairs
                    if users[0] != sndUser and users[1] != sndUser
                ]

        while not flag:

            for fstUser, sndUser in userPairs:
                fstULoc = dorms[fstUser.location]
                sndULoc = dorms[sndUser.location]
                dist = math.sqrt(
                    pow(int(fstULoc[0]) - int(sndULoc[0]), 2)
                    + pow(int(fstULoc[2:]) - int(sndULoc[2:]), 2)
                )

                if dist < score:
                    closestUser = sndUser
                    currUser = fstUser
                    score = dist

            yield Match(
                users={currUser.uid, closestUser.uid},
                metadata=MatchMetadata(
                    generator=GENERATOR_LOCATION,
                    score=score,
                    location=[currUser.location, closestUser.location],
                ),
            )

            userPairs = [
                users
                for users in userPairs
                if users[0] != currUser and users[1] != currUser
            ]
            userPairs = [
                users
                for users in userPairs
                if users[0] != closestUser and users[1] != closestUser
            ]
            score = 10.0

            if userPairs == []:
                flag = True
