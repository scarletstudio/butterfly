from pipeline.matching.core.engine import MatchingEngine
from pipeline.matching.finalizers.fallbacks import (
    finalize_fallbacks_with_retries,
)
from pipeline.matching.rankers.default import rank_pass


class MainMatchingEngine(MatchingEngine):
    def __init__(self):
        super().__init__(
            generators=[],
            ranker=rank_pass,
            finalizer=finalize_fallbacks_with_retries(n=5),
        )
