import datetime

from pipeline.types import ReleaseDate, ReleaseTag

YMD_FORMAT = "%Y-%m-%d"


def from_release_tag(s: ReleaseTag) -> ReleaseDate:
    return datetime.datetime.strptime(s, YMD_FORMAT)


def to_release_tag(release: ReleaseDate) -> ReleaseTag:
    return release.strftime(YMD_FORMAT)
