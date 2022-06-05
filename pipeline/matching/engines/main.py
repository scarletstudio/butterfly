from pipeline.matching.core.engine import MatchingEngine
from pipeline.matching.finalizers.fallback import (
    fallback_finalizer_with_retries,
)
from pipeline.matching.rankers.default import no_ranker


class MainMatchingEngine(MatchingEngine):
    def __init__(self):
        super().__init__(
            generators=[],
            ranker=no_ranker,
            finalizer=fallback_finalizer_with_retries(n=5),
        )
