import pytest

from pipeline.load.display_metrics import (
    render_counts_per_user,
    render_user_emails,
)
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


def test_render_user_emails():
    users = [
        User(uid="A", email="ayman@iit.edu"),
        User(uid="B", email="bridget@iit.edu"),
        User(uid="C", email="chunter@iit.edu"),
    ]

    actual = render_user_emails(users)

    expected = "ayman@iit.edu\n" "bridget@iit.edu\n" "chunter@iit.edu"
    assert actual == expected
