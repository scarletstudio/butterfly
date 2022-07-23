from itertools import zip_longest
from typing import List, Tuple

IndexAndPair = Tuple[int, Tuple]


class EqualListsException(Exception):
    pass


class DifferentListSizesException(Exception):
    pass


def get_first_mismatched_pair(list_a: List, list_b: List) -> IndexAndPair:
    if list_a == list_b:
        raise EqualListsException("Lists are equal, there is no mismatch.")

    zipped = zip_longest(list_a, list_b, fillvalue=None)
    for i, (item_a, item_b) in enumerate(zipped):
        if item_a != item_b:
            return i, (item_a, item_b)
    return -1, (None, None)
