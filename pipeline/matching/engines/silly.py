from pipeline.matching.core.engine import MatchingEngine
from pipeline.matching.finalizers.fallbacks import (
    finalize_fallbacks_with_retries,
)
from pipeline.matching.generators.silly import configure_generate_common_letters
from pipeline.matching.rankers.silly import rank_common_letters


class SillyMatchingEngine(MatchingEngine):
    def __init__(self):
        super().__init__(
            generators=[configure_generate_common_letters(min_common=1)],
            ranker=rank_common_letters,
            finalizer=finalize_fallbacks_with_retries(n=5),
        )
