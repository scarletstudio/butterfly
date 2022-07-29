from pipeline.matching.generators import (
    ClusteringGenerator,
    converts_user_data_to_vector,
)
from pipeline.types import Interest, Match, MatchingInput, MatchMetadata, User


def test1():
    u1 = User(
        uid="A",
        interests=[
            Interest(code="art", name="art"),
            Interest(code="chess", name="chess"),
            Interest(code="fashion", name="fashion"),
            Interest(code="sports", name="sports"),
            Interest(code="movies", name="movies"),
        ],
    )
    v = converts_user_data_to_vector([u1])
    expected = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    return v[0][1] == expected


# add more tests
