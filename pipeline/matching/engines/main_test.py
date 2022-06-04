from pipeline.matching.engines.main import MainMatchingEngine
from pipeline.types import Match, MatchingInput, MatchingOutput, User, UserId


def make_test_user(uid: UserId) -> User:
    return User(uid=uid, displayName=f"User {uid}")


def make_match_between(*uids) -> Match:
    return Match(users=set(uids))


def test_engine_basic():
    # Prepare inputs
    users = [
        make_test_user("A"),
        make_test_user("B"),
        make_test_user("C"),
    ]
    recent_matches = []
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=users,
        recent_matches=[],
    )

    # Run matching engine
    engine = MainMatchingEngine()
    actual = engine.run(inp)

    # Verify expected outputs
    expected_matches = [
        make_match_between("A", "B", "C"),
    ]
    expected = MatchingOutput(
        community="test",
        release="2022-04-01",
        users=users,
        matches=expected_matches,
    )
    assert actual == expected
