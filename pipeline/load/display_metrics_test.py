import pytest

from pipeline.load.display_metrics import render_counts_per_user
from pipeline.types import User


def test_render_counts_per_user():
    # Verifies that the counts are properly displayed in descending order
    users = [
        User(uid="A", displayName="Ayman"),
        User(uid="B", displayName="Bridget"),
        User(uid="C", displayName="Chris"),
        User(uid="D", displayName="Dinora"),
        User(uid="E", displayName="Erik"),
    ]
    counts = {"D": 4, "A": 1, "B": 5, "E": 6, "C": 2}

    actual = render_counts_per_user(users, counts)

    expected = [
        "6 - Erik (E)",
        "5 - Bridget (B)",
        "4 - Dinora (D)",
        "2 - Chris (C)",
        "1 - Ayman (A)",
    ]
    assert actual == expected
