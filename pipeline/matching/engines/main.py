from pipeline.matching.core import MatchingEngine
from pipeline.matching.finalizers import FallbacksFinalizer
from pipeline.matching.rankers import DefaultRanker


class MainMatchingEngine(MatchingEngine):
    def __init__(self):
        super().__init__(
            generators=[],
            ranker=DefaultRanker(),
            finalizer=FallbacksFinalizer(n_retries=5),
        )
