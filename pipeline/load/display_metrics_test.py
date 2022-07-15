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

    # Output is a multi-line string, this is a way to write it without indents
    expected = (
        "6 - Erik (E)\n"
        "5 - Bridget (B)\n"
        "4 - Dinora (D)\n"
        "2 - Chris (C)\n"
        "1 - Ayman (A)"
    )
    assert actual == expected
