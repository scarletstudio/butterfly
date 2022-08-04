import pytest

from pipeline.load.display_metrics import (
    dispaly_intent_distribution_in_matches,
    render_counts_per_user,
    render_user_emails,
)
from pipeline.types import IntentMatch, Match, MatchMetadata, User


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


def test_dispaly_intent_distribution_in_matches():

    matches = [
        Match(
            users={"1", "3"},
            metadata=MatchMetadata(
                generator="similarIntentsGenerator",
                score=1,
                intents=[
                    IntentMatch(code="guitar", seeker="3", giver="1"),
                    IntentMatch(code="sing", seeker="1", giver="3"),
                ],
            ),
        ),
        Match(
            users={"2", "4"},
            metadata=MatchMetadata(
                generator="similarIntentsGenerator",
                score=1,
                intents=[
                    IntentMatch(code="chess", seeker="4", giver="2"),
                    IntentMatch(code="tutoring", seeker="2", giver="4"),
                ],
            ),
        ),
        Match(
            users={"1", "3"},
            metadata=MatchMetadata(
                generator="rareIntentsGenerator",
                rareIntents=[IntentMatch(code="comedy", seeker="1", giver="3")],
            ),
        ),
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="similarInterestsGenerator",
                commonInterests=["painting"],
            ),
        ),
        Match(
            users={"1", "2"},
            metadata=MatchMetadata(
                generator="limitedSchedulesGenerator",
            ),
        ),
    ]

    actual = dispaly_intent_distribution_in_matches(matches)

    expected = (
        "guitar : 1\n"
        "sing : 1\n"
        "chess : 1\n"
        "tutoring : 1\n"
        "comedy : 1\n"
    )
    assert actual == expected

    def test_intent_distribution_in_community():
        tutoring = Intent(code="tutoring", name="Tutoring", side=Side.BLANK)
        seek_tutoring = Intent(
            code="tutoring", name="Tutoring", side=Side.SEEKING
        )
        give_tutoring = Intent(
            code="tutoring", name="Tutoring", side=Side.GIVING
        )
        comedy = Intent(code="comedy", name="Comedy", side=Side.BLANK)
        seek_comedy = Intent(code="comedy", name="Comedy", side=Side.SEEKING)
        give_comedy = Intent(code="comedy", name="Comedy", side=Side.GIVING)

        users = [
            User(
                uid="A",
                displayName="User A",
                intents=[seek_tutoring, seek_comedy],
            ),
            User(uid="B", displayName="User B", intents=[seek_tutoring]),
            User(
                uid="C",
                displayName="User C",
                intents=[give_tutoring, seek_comedy],
            ),
            User(
                uid="D",
                displayName="User D",
                intents=[seek_tutoring, give_comedy],
            ),
        ]

        actual = display_intent_distribution_in_community(users)

        # will return two dictionaries,
        # first is the givers and their count and second are the seekers and their count

        expected = (
            "Giving Intent:\n"
            "tutoring : 1\n"
            "comedy : 1\n"
            "Seeking Intent:\n"
            "tutoring : 3\n"
            "comedy : 2\n"
        )

        actual == actual
