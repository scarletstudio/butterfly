from pipeline.matching.core import MatchingEngine, MatchRanker
from pipeline.matching.finalizers import FallbacksFinalizer
from pipeline.matching.generators import (
    CommonLettersGenerator,
    LimitedSchedulesGenerator,
    RareIntentsGenerator,
    RareInterestsGenerator,
    SimilarIntentsGenerator,
    SimilarInterestsGenerator,
    SimilarSchedulesGenerator,
)
from pipeline.matching.rankers import (
    CommonLettersRanker,
    IntentUpvotesRanker,
    MatchStarsRanker,
    MultiRanker,
    QuantityRanker,
    RecentRepeatsRanker,
    VarietyRanker,
)

ENGINE_MAIN = "mainEngine"


class MainMatchingEngine(MatchingEngine):
    def __init__(self, **kwargs):
        super().__init__(
            name=ENGINE_MAIN,
            generators=[
                SimilarIntentsGenerator(),
                SimilarInterestsGenerator(),
                SimilarSchedulesGenerator(),
                RareIntentsGenerator(),
                RareInterestsGenerator(),
                LimitedSchedulesGenerator(),
                CommonLettersGenerator(min_common=5),
            ],
            ranker=MultiRanker(
                rankers=[
                    RecentRepeatsRanker(include_repeats=False),
                    CommonLettersRanker(),
                    MatchStarsRanker(),
                    IntentUpvotesRanker(),
                    VarietyRanker(),
                    QuantityRanker(),
                ]
            ),
            finalizer=FallbacksFinalizer(n_retries=10),
            **kwargs
        )
