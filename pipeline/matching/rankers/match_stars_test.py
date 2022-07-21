import pytest

from pipeline.matching.rankers import MatchStarsRanker
from pipeline.types import Match, MatchingInput, MatchMetadata, MatchStars


def test_example():  # experience matters: blueGenerator with 1 match, greenGenerator with 0 matches, ranking the same match from both generators
    match_stars = [
        MatchStars(
            from_user="A",
            value=5,
            community="test",
            match="1",
            users={"A", "B"},
            generator="blueGenerator",
            timestamp=0,
        )
    ]
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[],
        match_stars=match_stars,
    )
    metadata_1 = MatchMetadata(generator="greenGenerator")
    metadata_2 = MatchMetadata(generator="blueGenerator")
    proposed = [
        Match(users={"C", "D"}, metadata=metadata_1),
        Match(users={"C", "D"}, metadata=metadata_2),
    ]

    ranker = MatchStarsRanker()
    actual = list(ranker.rank(inp, proposed))

    expected = [
        Match(users={"C", "D"}, metadata=metadata_2),
        Match(users={"C", "D"}, metadata=metadata_1),
    ]

    assert actual == expected


def test_example_2():  # quality vs. quantity: blueGenerator with 1 good match, greenGenerator with 3 bad matches, ranking the same match from both generators
    match_stars = [
        MatchStars(
            from_user="A",
            value=5,
            community="test",
            match="1",
            users={"A", "B"},
            generator="blueGenerator",
            timestamp=0,
        ),
        MatchStars(
            from_user="A",
            value=1,
            community="test",
            match="2",
            users={"A", "C"},
            generator="greenGenerator",
            timestamp=1,
        ),
        MatchStars(
            from_user="C",
            value=2,
            community="test",
            match="3",
            users={"A", "C"},
            generator="greenGenerator",
            timestamp=2,
        ),
        MatchStars(
            from_user="C",
            value=3,
            community="test",
            match="4",
            users={"C", "D"},
            generator="greenGenerator",
            timestamp=3,
        ),
    ]
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[],
        match_stars=match_stars,
    )
    metadata_1 = MatchMetadata(generator="greenGenerator")
    metadata_2 = MatchMetadata(generator="blueGenerator")
    proposed = [
        Match(users={"C", "D"}, metadata=metadata_1),
        Match(users={"C", "D"}, metadata=metadata_2),
    ]

    ranker = MatchStarsRanker()
    actual = list(ranker.rank(inp, proposed))

    expected = [
        Match(users={"C", "D"}, metadata=metadata_2),
        Match(users={"C", "D"}, metadata=metadata_1),
    ]
    assert actual == expected


def test_example_3():  # multiple generators: 1 match for each A, B, and C, ranking the same match from each generator
    match_stars = [
        MatchStars(
            from_user="A",
            value=1,
            community="test",
            match="1",
            users={"A", "B"},
            generator="blueGenerator",
            timestamp=0,
        ),
        MatchStars(
            from_user="B",
            value=3,
            community="test",
            match="2",
            users={"B", "C"},
            generator="greenGenerator",
            timestamp=1,
        ),
        MatchStars(
            from_user="C",
            value=5,
            community="test",
            match="3",
            users={"C", "D"},
            generator="redGenerator",
            timestamp=2,
        ),
    ]
    inp = MatchingInput(
        community="test",
        release="2022-04-01",
        users=[],
        recent_matches=[],
        match_stars=match_stars,
    )
    metadata_1 = MatchMetadata(generator="greenGenerator")
    metadata_2 = MatchMetadata(generator="blueGenerator")
    metadata_3 = MatchMetadata(generator="redGenerator")

    proposed = [
        Match(users={"C", "D"}, metadata=metadata_2),
        Match(users={"C", "D"}, metadata=metadata_1),
        Match(users={"C", "D"}, metadata=metadata_3),
    ]

    ranker = MatchStarsRanker()
    actual = list(ranker.rank(inp, proposed))

    expected = [
        Match(users={"C", "D"}, metadata=metadata_3),
        Match(users={"C", "D"}, metadata=metadata_1),
        Match(users={"C", "D"}, metadata=metadata_2),
    ]
    assert actual == expected
