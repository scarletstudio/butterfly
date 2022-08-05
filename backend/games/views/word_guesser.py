from ninja import Router, Schema

from backend.games.word_guesser.WordGuesser import WordGuesser
from backend.utils import format_json, get_db

router = Router()


class Guess(Schema):
    word: str


@router.post("/{game}/guess")
def post_analytics_data(request, game: str, guess: Guess):
    print(game, guess.word)
    return format_json(message="Guess submitted successfully.")
