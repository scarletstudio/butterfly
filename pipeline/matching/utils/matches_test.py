import string

from pipeline.matching.utils import (
    generate_keys,
    get_recently_matched_users_by_user,
)
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


def test_generate_keys():
    actual = generate_keys(n=10, k=4)
    valid_chars = set(string.ascii_letters + string.digits)
    assert len(actual) == 10, "Output contains wrong number of keys."
    assert len(set(actual)) == len(actual), "Output contains repeated keys."
    assert all([len(key) == 4 for key in actual]), "Key size is incorrect."
    assert all(
        [set(key).issubset(valid_chars) for key in actual]
    ), "Key contains invalid characters."
