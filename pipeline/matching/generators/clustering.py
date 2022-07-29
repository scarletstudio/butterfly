import math
from typing import Iterator

from pipeline.matching.core import MatchGenerator
from pipeline.types import Match, MatchingInput, MatchMetadata

GENERATOR_CLUSTERING = "clusteringGenerator"

# TODO: Add type annotations to auxilary functions
def cosine_similarity(v1, v2):
    "compute cosine similarity of v1 to v2: (v1 dot v2)/{||v1||*||v2||)"
    sumxx, sumxy, sumyy = 0, 0, 0
    for i in range(len(v1)):
        x = v1[i]
        y = v2[i]
        sumxx += x * x
        sumyy += y * y
        sumxy += x * y
    if sumxx * sumyy == 0:
        return 0
    return sumxy / math.sqrt(sumxx * sumyy)


def closest_match(user1, users):
    """
    Summary:
        loop over all other users to find match with closest aka max cosine similarity --
        predefined function "cosine_similarity(user1[1],user2[1])"
        think of users as an 11 dimensional point and trying to find the closest distance between two points
    Performance: O(?)
    """
    cos_sim = 0
    user1_match = ""
    for user in users:
        if user[0] == user1[0]:
            continue
        if cosine_similarity(user[1], user1[1]) > cos_sim:
            cos_sim = cosine_similarity(user[1], user1[1])
            user1_match = user[0]
    return user1_match


def converts_user_data_to_vector(users_w_data):
    """
    Summary:
    Performance:
    """
    intents = ["involve-iit", "watch-recs", "tech-careers"]
    interests = ["art", "chess", "fashion", "movies", "sports"]
    vectors = []
    user_vector = [0] * 11
    for user in users_w_data:
        for interest in user.interests:
            for i in range(5):
                if interest.name == interests[i]:
                    user_vector[i] = 1
        for intent in user.intents:
            if intent.name == intents[0] and intent.side.SEEKING:
                user_vector[5] = 1
            if intent.name == intents[0] and intent.side.GIVING:
                user_vector[6] = 1
            if intent.name == intents[1] and intent.side.SEEKING:
                user_vector[7] = 1
            if intent.name == intents[1] and intent.side.GIVING:
                user_vector[8] = 1
            if intent.name == intents[2] and intent.side.SEEKING:
                user_vector[9] = 1
            if intent.name == intents[2] and intent.side.GIVING:
                user_vector[10] = 1
        vectors.append((user.uid, user_vector))
        user_vector = [0] * 11
    return vectors


class ClusteringGenerator(MatchGenerator):
    def __init__(self):
        super().__init__(name=GENERATOR_CLUSTERING)

    def generate(self, inp: MatchingInput) -> Iterator[Match]:
        """
        Generates matches between users who have closest cosine similarity.
        """
        users = converts_user_data_to_vector(inp.users)
        for user in users:
            match = closest_match(user, users)
            if not match:
                continue
            MatchMetadata(generator=GENERATOR_CLUSTERING)
            yield Match(users={user[0], match})
