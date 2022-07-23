from dataclasses import dataclass
from unittest.mock import MagicMock, patch

import pytest

from pipeline.testing.assertions import equal_lists

MOCK_PYTEST_ASSERTION_MESSAGE = "(Pytest diff goes here.)"

patch_get_assertion_message = patch(
    "pipeline.testing.assertions.get_assertion_message",
    return_value=MOCK_PYTEST_ASSERTION_MESSAGE,
)


# TODO(vinesh): Enable ordering for all our dataclasses that are used in lists
@dataclass(order=True)
class ExampleClass:
    a: str
    b: int


@patch_get_assertion_message
def test_assert_dataclass_lists_different_items(get_assertion_message):
    example_actual = [ExampleClass(a="A", b=2), ExampleClass(a="B", b=2)]
    example_expected = [ExampleClass(a="A", b=2), ExampleClass(a="B", b=3)]

    with pytest.raises(AssertionError) as excinfo:
        equal_lists(example_actual, example_expected)
    actual = str(excinfo.value)

    expected = (
        "First pair of mismatched items at index=1:\n"
        "(Pytest diff goes here.)\n\n"
        "`actual` has the correct length, but different items.\n"
        "Above: diff between first pair of mismatched items."
    )
    assert actual == expected
    assert get_assertion_message.called_once()


@patch_get_assertion_message
def test_assert_dataclass_lists_different_order(get_assertion_message):
    example_actual = [ExampleClass(a="B", b=2), ExampleClass(a="A", b=2)]
    example_expected = [ExampleClass(a="A", b=2), ExampleClass(a="B", b=2)]

    with pytest.raises(AssertionError) as excinfo:
        equal_lists(example_actual, example_expected)
    actual = str(excinfo.value)

    expected = (
        "First pair of mismatched items at index=0:\n"
        "(Pytest diff goes here.)\n\n"
        "`actual` has the same items, but in a different order.\n"
        "Above: diff between first pair of mismatched items."
    )
    assert actual == expected
    assert get_assertion_message.called_once()


@patch_get_assertion_message
def test_assert_dataclass_lists_different_sizes(get_assertion_message):
    example_actual = [ExampleClass(a="B", b=2)]
    example_expected = [ExampleClass(a="A", b=2), ExampleClass(a="B", b=2)]

    with pytest.raises(AssertionError) as excinfo:
        equal_lists(example_actual, example_expected)
    actual = str(excinfo.value)

    expected = (
        "(Pytest diff goes here.)\n\n"
        "`actual` differs in size: 1, should be 2.\n"
        "Above: diff between lists."
    )
    assert actual == expected
    assert get_assertion_message.called_once()


@patch_get_assertion_message
def test_assert_dataclass_lists_equal(get_assertion_message):
    example_actual = [ExampleClass(a="A", b=2), ExampleClass(a="B", b=2)]
    example_expected = [ExampleClass(a="A", b=2), ExampleClass(a="B", b=2)]

    assert equal_lists(example_actual, example_expected)
    assert get_assertion_message.not_called()
