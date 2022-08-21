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

    def test2():
        u2 = User(
            uid="B",
            interests=[
                Interest(code="art", name="art"),
                Interest(code="chess", name="chess"),
                Interest(code="fashion", name="fashion"),
                Interest(code="sports", name="sports"),
                Interest(code="movies", name="movies"),
            ],
            intents=[
                Intent(
                    code="involve-iit", side=Side.GIVING, name="involve-iit"
                ),
                Intent(
                    code="involve-iit", side=Side.SEEKING, name="involve-iit"
                ),
                Intent(
                    code="tech-careers", side=Side.SEEKING, name="tech-careers"
                ),
                Intent(code="watch-recs", side=Side.GIVING, name="watch-recs"),
            ],
        )

    v = converts_user_data_to_vector([u2])
    expected = [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0]
    return v[0][1] == expected


# add more tests
