from dataclasses import dataclass

InterestCode = str


@dataclass
class Interest:
    code: InterestCode
    name: str
