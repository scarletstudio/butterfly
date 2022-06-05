from pipeline.matching.engines.satirical import SatiricalMatchingEngine
from pipeline.matching.generators.satirical_test import make_letter_metadata
from pipeline.types import Match, MatchingInput, MatchingOutput, User, UserId


def test_engine_basic():
    # Prepare inputs
    users = [
        User(uid="1", displayName="Akshaya"),
        User(uid="2", displayName="Yavin"),
        User(uid="3", displayName="Colt"),
        User(uid="4", displayName="Jurgen"),
    ]
    recent_matches = []
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=users,
        recent_matches=recent_matches,
    )

    # Run matching engine
    engine = SatiricalMatchingEngine()
    actual = engine.run(inp)
    print(actual.matches)

    # Verify expected outputs
    expected_matches = [
        Match(users={"1", "2"}, metadata=make_letter_metadata(["a", "y"])),
        Match(users={"3", "4"}),
    ]
    expected = MatchingOutput(
        community="test",
        release="2022-04-01",
        users=users,
        matches=expected_matches,
    )
    assert actual == expected
