from pipeline.matching.core.engine import MatchingEngine
from pipeline.matching.finalizers.fallback import get_fallback_matches
from pipeline.matching.rankers.default import no_ranker


class MainMatchingEngine(MatchingEngine):
    def __init__(self):
        super().__init__(
            generators=[], ranker=no_ranker, finalizer=get_fallback_matches
        )
