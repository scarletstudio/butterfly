from dataclasses import dataclass
from datetime import timedelta

from pipeline.types.match import Match


@dataclass
class Notification:
    match: Match
    last_msg_time: timedelta
