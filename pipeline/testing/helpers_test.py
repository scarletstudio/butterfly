import pytest

from pipeline.testing.helpers import (
    EqualListsException,
    get_first_mismatched_pair,
)


def test_get_first_mismatched_pair_mismatch_in_middle():
    list_a = [1, 2, 3]
    list_b = [1, 4, 3]

    actual = get_first_mismatched_pair(list_a, list_b)

    expected = (1, (2, 4))
    assert actual == expected


def test_get_first_mismatched_pair_equal_lists():
    list_a = [1, 1]
    list_b = [1, 1]

    with pytest.raises(EqualListsException):
        get_first_mismatched_pair(list_a, list_b)


def test_get_first_mismatched_pair_lists_of_different_lengths():
    list_a = [9]
    list_b = []

    actual = get_first_mismatched_pair(list_a, list_b)

    expected = (0, (9, None))
    assert actual == expected
