from pipeline.matching.utils import get_recently_matched_users_by_user
from pipeline.types import Match


def test_get_recently_matched_users_by_user():
    matches = [
        Match(users={"A", "B"}),
        Match(users={"D", "C"}),
        Match(users={"A", "D"}),
        Match(users={"A", "B"}),
    ]
    actual = get_recently_matched_users_by_user(matches)
    expected = {
        "A": {"B", "D"},
        "B": {"A"},
        "C": {"D"},
        "D": {"A", "C"},
    }
    assert dict(actual) == expected
