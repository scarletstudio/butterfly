import datetime
from dataclasses import dataclass
from pipeline.schema.user import UserId
from typing import Optional, Set


@dataclass
class Match:
    users: Set[UserId]
    community: Optional[str] = None
    release: Optional[datetime.datetime] = None
    key: Optional[str] = None
    title: Optional[str] = None
