import pytest

from pipeline.load.display_metrics import display_internal_matching_metrics
from pipeline.types import MatchingMetrics, MatchingOutput, User


def test_display_logic():

    # This test verifies if the metrics are properly displayed in descending order

    users = [
        User(uid="A", displayName="Ayman"),
        User(uid="B", displayName="Brian"),
        User(uid="C", displayName="Chris"),
        User(uid="D", displayName="Dinora"),
        User(uid="E", displayName="Erik"),
    ]
    metric = MatchingMetrics(
        n_proposed_matches_per_user={"D": 4, "A": 1, "B": 5, "E": 6, "C": 2}
    )
    output = MatchingOutput(community="", release="", users=users, matches=[])
    actual = display_internal_matching_metrics.run(
        output, metric, return_metric=True
    )
    expected = {"Erik": 6, "Brian": 5, "Dinora": 4, "Chris": 2, "Ayman": 1}

    print(actual)

    assert list(actual.keys()) == list(expected.keys())

    # Since dictionary assertion disregards order, assertion is done using the keys of the actual and expected converted to a list
    # List assertion takes order into account


def test_identical_users():

    # This test verifies how the display function behaves given users w/ identical display names

    users = [
        User(uid="A", displayName="Ayman"),
        User(uid="B", displayName="Liliana"),
        User(uid="C", displayName="Chris"),
        User(uid="D", displayName="Marilyn"),
        User(uid="E", displayName="Chris"),
    ]
    metric = MatchingMetrics(
        n_proposed_matches_per_user={"D": 4, "A": 1, "B": 5, "E": 6, "C": 2}
    )
    output = MatchingOutput(community="", release="", users=users, matches=[])
    actual = display_internal_matching_metrics.run(
        output, metric, return_metric=True
    )
    expected = {
        "Chris (uid: E)": 6,
        "Liliana": 5,
        "Marilyn": 4,
        "Chris (uid: C)": 2,
        "Ayman": 1,
    }

    assert list(actual.keys()) == list(expected.keys())

    # Users w/ identical names will be further distinguished with their uid
