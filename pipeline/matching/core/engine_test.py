from unittest.mock import MagicMock

from pipeline.matching.core.engine import MatchingEngine
from pipeline.types import Match, MatchingInput, MatchingOutput, User, UserId


def test_engine_basic():
    # Prepare inputs
    users = [
        User(uid="A", displayName="User A"),
        User(uid="B", displayName="User B"),
        User(uid="C", displayName="User C"),
        User(uid="D", displayName="User D"),
        User(uid="E", displayName="User E"),
    ]
    recent_matches = [
        Match(users={"A", "B"}),
        Match(users={"C", "D", "E"}),
    ]
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=users,
        recent_matches=recent_matches,
    )

    # Prepare matching engine
    mock_gen_1 = MagicMock()
    mock_gen_1.generate = MagicMock(return_value=[Match(users={"A", "C"})])
    mock_gen_2 = MagicMock()
    mock_gen_2.generate = MagicMock(return_value=[Match(users={"A", "D"})])
    mock_ranker = MagicMock()
    mock_ranker.rank = MagicMock(side_effect=lambda x, y: [m for m in y])
    mock_finalizer = MagicMock()
    mock_finalizer.finalize = MagicMock(
        return_value=[Match(users={"B", "D", "E"})]
    )
    engine = MatchingEngine(
        generators=[mock_gen_1, mock_gen_2],
        ranker=mock_ranker,
        finalizer=mock_finalizer,
    )

    # Run matching engine and verify expected outputs
    actual = engine.run(inp)
    expected_matches = [
        Match(users={"A", "C"}),
        Match(users={"B", "D", "E"}),
    ]
    expected = MatchingOutput(
        community="test",
        release="2022-04-01",
        users=users,
        matches=expected_matches,
    )
    assert actual == expected


def test_engine_all_priority_matches():
    # Prepare inputs
    users = [
        User(uid="A", displayName="User A"),
        User(uid="B", displayName="User B"),
        User(uid="C", displayName="User C"),
        User(uid="D", displayName="User D"),
    ]
    recent_matches = []
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=users,
        recent_matches=recent_matches,
    )

    # Prepare matching engine
    mock_generator = MagicMock()
    mock_generator.generate = MagicMock(
        return_value=[
            Match(users={"A", "B"}),
            Match(users={"C", "D"}),
        ]
    )
    mock_ranker = MagicMock()
    mock_ranker.rank = MagicMock(side_effect=lambda x, y: [m for m in y])
    mock_finalizer = MagicMock()
    mock_finalizer.finalize = MagicMock(return_value=[])
    engine = MatchingEngine(
        generators=[mock_generator],
        ranker=mock_ranker,
        finalizer=mock_finalizer,
    )

    # Run matching engine and verify expected outputs
    actual = engine.run(inp)
    expected_matches = [
        Match(users={"A", "B"}),
        Match(users={"C", "D"}),
    ]
    expected = MatchingOutput(
        community="test",
        release="2022-04-01",
        users=users,
        matches=expected_matches,
    )
    assert actual == expected
    mock_finalizer.finalize.assert_not_called()
