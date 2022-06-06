from pipeline.matching.engines.simple import SimpleMatchingEngine
from pipeline.types import (
    Match,
    MatchingInput,
    MatchingOutput,
    MatchMetadata,
    User,
    UserId,
)


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
    engine = SimpleMatchingEngine()
    actual = engine.run(inp)
    print(actual.matches)

    # Verify expected outputs
    expected_metadata_1 = MatchMetadata(
        generator="commonLettersGenerator", commonLetters=["a", "y"]
    )
    expected_matches = [
        Match(users={"1", "2"}, metadata=expected_metadata_1),
        Match(users={"3", "4"}),
    ]
    expected = MatchingOutput(
        community="test",
        release="2022-04-01",
        users=users,
        matches=expected_matches,
    )
    assert actual == expected
