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
    IntentUpvotesRanker,
    MatchStarsRanker,
    MultiRanker,
    QuantityRanker,
    VarietyRanker,
)


class MainMatchingEngine(MatchingEngine):
    def __init__(self):
        super().__init__(
            generators=[
                SimilarIntentsGenerator(),
                SimilarInterestsGenerator(),
                SimilarSchedulesGenerator(),
                RareIntentsGenerator(),
                RareInterestsGenerator(),
                LimitedSchedulesGenerator(),
                CommonLettersGenerator(min_common=3),
            ],
            ranker=MultiRanker(
                rankers=[
                    MatchStarsRanker(),
                    IntentUpvotesRanker(),
                    VarietyRanker(),
                    QuantityRanker(),
                ]
            ),
            finalizer=FallbacksFinalizer(n_retries=10),
        )
