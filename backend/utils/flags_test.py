from unittest.mock import patch

from backend.testing import MockEnviron
from backend.utils import get_ninja_api_settings


@patch("backend.utils.flags.os.environ")
def test_disable_ninja_docs_outside_dev_environment(environ):
    environ.get = MockEnviron(ENVIRONMENT="production").get
    actual = get_ninja_api_settings()
    assert actual == {"docs_url": None}

    environ.get = MockEnviron().get
    actual = get_ninja_api_settings()
    assert actual == {"docs_url": None}


@patch("backend.utils.flags.os.environ")
def test_enable_ninja_docs_inside_dev_environment(environ):
    environ.get = MockEnviron(ENVIRONMENT="development").get
    actual = get_ninja_api_settings()
    assert actual == {}
