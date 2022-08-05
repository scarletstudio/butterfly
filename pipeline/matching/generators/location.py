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
        # closest user to the current user
        closestUser = User(uid="None", displayName="None", location="None")
        # current user
        currUser = User(uid="None", displayName="None", location="None")
        # the distance between two users
        score = 11.0

        # if there in an odd number of user the last user will get assigned to lastUser
        # other will remain as a "None" user
        lastUser = User(uid="None", displayName="None", location="None")

        if len(inp.users) % 2 == 1:
            lastUser = inp.users[-1]
            del inp.users[-1]

        # different combinations of the users
        userPairs = list(itertools.combinations(inp.users, r=2))

        # checks the pairs if both users location is the same
        for fstUser, sndUser in userPairs:
            if fstUser.location == sndUser.location:
                # then checks if the odd user's location is the same as the pair's
                # if it yield as a group of three
                if fstUser.location == lastUser.location:
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
                    # reset lastUser
                    lastUser = User(
                        uid="None", displayName="None", location="None"
                    )
                # else yield as a pair
                else:
                    yield Match(
                        users={fstUser.uid, sndUser.uid},
                        metadata=MatchMetadata(
                            generator=GENERATOR_LOCATION,
                            score=0.0,
                            location=[fstUser.location, sndUser.location],
                        ),
                    )

                # update the pairs in userPairs to not contain either of the users from the most recent yield
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

        while userPairs != []:
            for fstUser, sndUser in userPairs:
                # the coordinate locations of the two users
                fstULoc = dorms[fstUser.location]
                sndULoc = dorms[sndUser.location]
                # the distance between the two users
                dist = math.sqrt(
                    pow(int(fstULoc[0]) - int(sndULoc[0]), 2)
                    + pow(int(fstULoc[2:]) - int(sndULoc[2:]), 2)
                )

                # if the distance is less than the current score
                # update currUser to fstUser, closestUser to sndUser, and score to dist
                if dist < score:
                    currUser = fstUser
                    closestUser = sndUser
                    score = dist

            # if there is no odd user yield as a pair
            if lastUser.uid == "None":
                yield Match(
                    users={currUser.uid, closestUser.uid},
                    metadata=MatchMetadata(
                        generator=GENERATOR_LOCATION,
                        score=score,
                        location=[currUser.location, closestUser.location],
                    ),
                )
            # else yield as a group of three
            else:
                yield Match(
                    users={currUser.uid, closestUser.uid, lastUser.uid},
                    metadata=MatchMetadata(
                        generator=GENERATOR_LOCATION,
                        score=score,
                        location=[
                            currUser.location,
                            closestUser.location,
                            lastUser.location,
                        ],
                    ),
                )
                # reset lastUser
                lastUser = User(uid="None", displayName="None", location="None")

            # update userPairs to not include pairs with the users from the most current match
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

            # reset score
            score = 11.0
