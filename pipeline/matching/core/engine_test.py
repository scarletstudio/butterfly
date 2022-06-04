from unittest.mock import MagicMock

from pipeline.matching.core.engine import MatchingEngine
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
        make_test_user("D"),
        make_test_user("E"),
    ]
    recent_matches = [
        make_match_between("A", "B"),
        make_match_between("C", "D", "E"),
    ]
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=users,
        recent_matches=[],
    )

    # Prepare matching engine
    mock_generator_1 = MagicMock(return_value=[make_match_between("A", "C")])
    mock_generator_2 = MagicMock(return_value=[make_match_between("A", "D")])
    mock_ranker = MagicMock(side_effect=lambda x, y: [m for m in y])
    mock_finalizer = MagicMock(return_value=[make_match_between("B", "D", "E")])
    engine = MatchingEngine(
        generators=[mock_generator_1, mock_generator_2],
        ranker=mock_ranker,
        finalizer=mock_finalizer,
    )

    # Run matching engine and verify expected outputs
    actual = engine.run(inp)
    expected_matches = [
        make_match_between("A", "C"),
        make_match_between("B", "D", "E"),
    ]
    expected = MatchingOutput(
        community="test",
        release="2022-04-01",
        users=users,
        matches=expected_matches,
    )
    assert actual == expected
