from pipeline.types import Side

VALID_SIDES = {Side.SEEKING.value, Side.GIVING.value}


def is_intent_map(d):
    """Checks whether data is Dict[Side, bool]."""
    if not isinstance(d, dict):
        return False
    for key, val in d.items():
        if key not in VALID_SIDES:
            return False
        if not isinstance(val, bool):
            return False
    return True
