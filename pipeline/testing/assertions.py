from typing import Any, List

from pipeline.testing.helpers import get_first_mismatched_pair


def get_assertion_message(actual: Any, expected: Any) -> str:
    """
    Compare two values and return their assertion error message, or an empty
    string if no message.

    When pytest assertion rewriting is enabled, the assertion error may provide a helpful description of the difference between the two values: https://docs.pytest.org/en/stable/how-to/writing_plugins.html#assertion-rewriting

    This method can help capture that description without raising an error, so
    that other testing methods can add more information to the message.
    """
    message = ""
    try:
        assert actual == expected
    except AssertionError as error:
        if error:
            message = str(error)
    return message


def get_assertion_message_first_mismatch(actual: List, expected: List) -> str:
    index, pair = get_first_mismatched_pair(actual, expected)
    actual_item, expected_item = pair
    diff = get_assertion_message(actual_item, expected_item)
    message = f"First pair of mismatched items at index={index}:\n{diff}\n"
    return message


def equal_lists(actual: List, expected: List) -> bool:
    """
    Compares two lists, adding an additional explanation to the assertion error.

    When lists are the same size, but have mismatching items, this assertion
    displays assertion error for the first pair of items that do not match.

    This method is recommended for use when comparing lists of dataclasses, to
    get a simpler diff of the items that do not match, rather than displaying
    the entirety of each list.
    """
    if actual == expected:
        # Case 1: Lists match exactly
        return True

    explanation = ""
    diff = ""
    footnote = ""

    a_len = len(actual)
    e_len = len(expected)
    if a_len != e_len:
        explanation = f"`actual` differs in size: {a_len}, should be {e_len}."
        diff = get_assertion_message(actual, expected) + "\n"
        footnote = "Above: diff between lists."
    elif sorted(actual) == sorted(expected):
        explanation = "`actual` has the same items, but in a different order."
        diff = get_assertion_message_first_mismatch(actual, expected)
        footnote = "Above: diff between first pair of mismatched items."
    else:
        explanation = "`actual` has the correct length, but different items."
        diff = get_assertion_message_first_mismatch(actual, expected)
        footnote = "Above: diff between first pair of mismatched items."

    message = "\n".join([diff, explanation, footnote])
    raise AssertionError(message)
    return False
