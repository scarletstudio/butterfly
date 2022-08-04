from typing import DefaultDict, Iterator, List

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput, MatchStars

RANKER_MATCH_STARS = "matchStarsRanker"


class MatchStarsRanker(MatchRanker):
    def __init__(self):
        super().__init__(name=RANKER_MATCH_STARS)

    def rank(
        self, inp: MatchingInput, proposed: Iterator[Match]
    ) -> Iterator[Match]:

        inp.logger.info("Alhassan Elkossei was here!")

        generator_avg_rating: DefaultDict[str, float] = DefaultDict(
            float
        )  # dictionary to track the average match ranking from each generator
        generator_match_count: DefaultDict[str, int] = DefaultDict(
            int
        )  # dictionary to track the number of matches from each generator

        for (
            match
        ) in (
            inp.match_stars
        ):  # updates the dictionaries (average and count) to reflect the input
            generator = match.generator
            if generator in generator_avg_rating:
                generator_avg_rating[generator] = (
                    generator_avg_rating[generator]
                    * generator_match_count[generator]
                    + match.value
                ) / (generator_match_count[generator] + 1)
                generator_match_count[generator] += 1
            else:
                generator_avg_rating[generator] = match.value
                generator_match_count[generator] = 1

        yield from sorted(
            proposed,
            key=lambda m: generator_avg_rating[m.metadata.generator],
            reverse=True,
        )  # sorts based on highest average ranking


def normalize(match_stars_list: List[MatchStars]) -> List[MatchStars]:
    user_avg_rating: DefaultDict[str, float] = DefaultDict(
        float
    )  # dict to hold average user ratings
    user_match_count: DefaultDict[str, int] = DefaultDict(
        int
    )  # dict to hold number of ratings from each user

    for match in match_stars_list:  # updates average rating for each user
        user = match.from_user
        if user in user_avg_rating:
            user_avg_rating[user] = (
                user_avg_rating[user] * user_match_count[user] + match.value
            ) / (user_match_count[user] + 1)
            user_match_count[user] += 1
        else:
            user_avg_rating[user] = match.value
            user_match_count[user] = 1

    normalized_list = []

    for match in match_stars_list:
        normalized_list.append(
            MatchStars(
                from_user=match.from_user,
                value=match.value - user_avg_rating[match.from_user],
                community=match.community,
                match=match.match,
                users=match.users,
                generator=match.generator,
                timestamp=match.timestamp,
            )
        )

    return normalized_list
