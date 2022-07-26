from typing import DefaultDict, Iterator

from pipeline.matching.core import MatchRanker
from pipeline.types import Match, MatchingInput

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
