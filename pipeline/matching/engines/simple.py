from pipeline.matching.core import MatchingEngine
from pipeline.matching.finalizers import FallbacksFinalizer
from pipeline.matching.generators import CommonLettersGenerator
from pipeline.matching.rankers import CommonLettersRanker


class SimpleMatchingEngine(MatchingEngine):
    def __init__(self):
        super().__init__(
            generators=[CommonLettersGenerator(min_common=1)],
            ranker=CommonLettersRanker(),
            finalizer=FallbacksFinalizer(n_retries=5),
        )
