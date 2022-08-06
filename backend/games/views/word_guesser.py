from typing import Dict

from ninja import Router, Schema

from backend.games.word_guesser import WordGuesser, get_next_game_state
from backend.utils import format_json, get_db


def clear_games_in_database():
    db = get_db()
    ref = db.reference("games/wordguesser")
    ref.delete()


router = Router()
games_by_id: Dict[str, WordGuesser] = {}
clear_games_in_database()


class Guess(Schema):
    word: str


def get_or_start_game(game_id: str) -> WordGuesser:
    """Returns the game class for the given ID, or starts a new one."""
    global games_by_id
    game = games_by_id.get(game_id)
    if not game:
        game = WordGuesser()
        game.start_game()
        games_by_id[game_id] = game
        db = get_db()
        ref = db.reference(f"games/wordguesser/{game_id}")
        ref.set({"started": True, "goal": game.goal_word})
    return game


@router.post("/{game_id}/restart")
def post_restart(request, game_id: str):
    global games_by_id
    if game_id not in games_by_id:
        return format_json(message=f"No game started for ID: {game_id}")

    del games_by_id[game_id]
    db = get_db()
    ref = db.reference(f"games/wordguesser/{game_id}")
    ref.delete()
    return format_json(message="Restarted game.")


@router.post("/{game_id}/guess")
def post_guess(request, game_id: str, guess: Guess):
    # Fetch previous game state from the database, if any
    game = get_or_start_game(game_id)
    db = get_db()
    path = f"games/wordguesser/{game_id}"
    game_ref = db.reference(path)
    previous_state = game_ref.get() or {}

    # Sync game to goal word in db
    game.goal_word = previous_state.get("goal")

    # Get game class and use the guess to update the game state
    next_state = get_next_game_state(game, guess.word, previous_state)
    print(f"Goal Word: {game.goal_word}")
    game_ref.set(next_state)

    return format_json(message="Guess submitted successfully.")
