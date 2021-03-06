import pytest

from pipeline.transform import augment_users_with_interests
from pipeline.types import Interest, RawUserInterests, User


def test_add_interests():
    users = [
        User(uid="1", displayName="A"),
        User(uid="2", displayName="B"),
        User(uid="3", displayName="C"),
    ]
    raw: RawUserInterests = {
        "1": {"hiking": True},
        "2": {"skiing": False},
        "3": {"climbing": True, "hiking": True},
    }

    actual = augment_users_with_interests.run(users, raw)

    hiking = Interest(code="hiking", name="hiking")
    skiing = Interest(code="skiing", name="skiing")
    climbing = Interest(code="climbing", name="climbing")
    expected = [
        User(uid="1", displayName="A", interests=[hiking]),
        User(uid="2", displayName="B", interests=[]),
        User(uid="3", displayName="C", interests=[climbing, hiking]),
    ]

    assert actual == expected


def test_more_users_and_interests():

    users = [
        User(uid="1", displayName="A"),
        User(uid="2", displayName="B"),
        User(uid="3", displayName="C"),
        User(uid="4", displayName="D"),
        User(uid="5", displayName="E"),
    ]
    raw: RawUserInterests = {
        "1": {
            "gaming": True,
            "drawing": False,
            "cooking": False,
            "exercising": True,
        },
        "2": {"skiing": False, "swimming": True},
        "3": {
            "climbing": False,
            "hiking": False,
            "reading": True,
            "archery": True,
            "photography": True,
        },
        "4": {
            "drawing": True,
            "painting": True,
            "gardening": True,
            "gaming": False,
            "cycling": True,
        },
        "5": {"roller skating": True},
    }

    actual = augment_users_with_interests.run(users, raw)

    gaming = Interest(code="gaming", name="gaming")
    exercising = Interest(code="exercising", name="exercising")
    swimming = Interest(code="swimming", name="swimming")
    reading = Interest(code="reading", name="reading")
    archery = Interest(code="archery", name="archery")
    photography = Interest(code="photography", name="photography")
    drawing = Interest(code="drawing", name="drawing")
    painting = Interest(code="painting", name="painting")
    gardening = Interest(code="gardening", name="gardening")
    cycling = Interest(code="cycling", name="cycling")
    roller_skating = Interest(code="roller skating", name="roller skating")

    expected = [
        User(uid="1", displayName="A", interests=[gaming, exercising]),
        User(uid="2", displayName="B", interests=[swimming]),
        User(
            uid="3", displayName="C", interests=[reading, archery, photography]
        ),
        User(
            uid="4",
            displayName="D",
            interests=[drawing, painting, gardening, cycling],
        ),
        User(uid="5", displayName="E", interests=[roller_skating]),
    ]

    assert actual == expected

    # This test sees how the function behaves with a slight increase in users and interest


def test_user_with_no_interests():

    users = [
        User(uid="3", displayName="B"),
        User(uid="1", displayName="C"),
        User(uid="2", displayName="A"),
    ]
    raw: RawUserInterests = {
        "1": {},
        "2": {"skiing": False},
        "3": {"climbing": True, "hiking": True},
    }

    actual = augment_users_with_interests.run(users, raw)

    hiking = Interest(code="hiking", name="hiking")
    skiing = Interest(code="skiing", name="skiing")
    climbing = Interest(code="climbing", name="climbing")
    expected = [
        User(uid="1", displayName="A", interests=[hiking]),
        User(uid="2", displayName="B", interests=[]),
        User(uid="3", displayName="C", interests=[climbing, hiking]),
    ]

    assert actual != expected

    # This test sees how the function behaves w/ a user with no interests


def test_no_userID_in_dict():

    users = [
        User(uid="1", displayName="A"),
        User(uid="2", displayName="B"),
        User(uid="3", displayName="C"),
    ]
    raw: RawUserInterests = {
        "2": {"skiing": False},
        "3": {"climbing": True, "hiking": True},
    }

    actual = augment_users_with_interests.run(users, raw)

    hiking = Interest(code="hiking", name="hiking")
    climbing = Interest(code="climbing", name="climbing")
    expected = [
        User(uid="1", displayName="A", interests=[]),
        User(uid="2", displayName="B", interests=[]),
        User(uid="3", displayName="C", interests=[climbing, hiking]),
    ]

    assert actual == expected

    # This test sees how the function behaves where a userID is absent from the RawUserInterests dictionary
