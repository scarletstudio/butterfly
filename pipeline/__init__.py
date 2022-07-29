import pytest

# Register any modules that require pytest assertion rewriting
# https://docs.pytest.org/en/stable/how-to/writing_plugins.html#assertion-rewriting
pytest.register_assert_rewrite("pipeline.testing.assertions")
