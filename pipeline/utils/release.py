import datetime
import random
import string
from typing import List


YMD_FORMAT = "%Y-%m-%d"


def from_release_tag(s: str) -> datetime.datetime:
    return datetime.datetime.strptime(s, YMD_FORMAT)


def to_release_tag(release: datetime.datetime) -> str:
    return release.strftime(YMD_FORMAT)


def generate_keys(n: int, k: int = 8) -> List[str]:
    """
    These key will only unique within this batch of n keys.
    For k = 8, there are 62^8 = ~200 trillion possible combinations.
    Inputs:
      n: Number of keys to generate
      k: Number of characters in each key
    Output:
      List of keys, unique within this batch.
    """
    # Start by maintaining a set to avoid duplicates
    output = set()
    # Key can be composed of uppercase or lowercase letters or numbers
    chars = string.ascii_letters + string.digits
    for _ in range(n):
        key = None
        while key is None:
            # Create a random key of size k
            key = "".join(random.sample(chars, k))
            # Avoid duplicate keys
            if key in output:
                key = None
        output.add(key)
    # Convert output to list
    return list(output)
