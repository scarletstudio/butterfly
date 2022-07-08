from typing import Dict, Optional, Set

from django.http import JsonResponse
from ninja import Schema

from backend.utils import SERVER_TIMESTAMP, format_json, get_db


def validate_value(rating: Dict, valid_values: Set) -> Optional[JsonResponse]:
    """Helper function validate the value of a rating."""
    value = rating["value"]
    if value not in valid_values:
        return format_json(status=400, error=f"Invalid rating value: {value}")
    return None


def create_rating(name: str, rating: Schema, valid: Set) -> JsonResponse:
    """Helper function to power the create rating endpoints."""
    # Validate rating value
    data = rating.dict()
    err = validate_value(data, valid)
    if err:
        return err

    # Add timestamp to rating record
    data["timestamp"] = SERVER_TIMESTAMP
    community = data["community"]

    # Write result to database
    db = get_db()
    ref = db.reference(f"ratings/{name}/{community}")
    ref.push(data)
    return format_json(message="Rating successfully submitted.")
