from typing import Dict

from ninja import Router, Schema

from backend.games.word_guesser.WordGuesser import MAX_GUESSES, WordGuesser
from backend.utils import format_json, get_db


def clear_games_in_database():
    db = get_db()
    ref = db.reference("games/wordguesser")
    ref.delete()


router = Router()
games_by_id: Dict[str, WordGuesser] = {}
clear_games_in_database()


def get_or_start_game(game_id: str) -> WordGuesser:
    """Returns the game class for the given ID, or starts a new one."""
    global games_by_id
    game = games_by_id.get(game_id)
    if not game:
        print("create a new game")
        game = WordGuesser()
        game.start_game()
        games_by_id[game_id] = game
        db = get_db()
        ref = db.reference(f"games/wordguesser/{game_id}")
        ref.set({"started": True})
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


class Guess(Schema):
    word: str


@router.post("/{game_id}/guess")
def post_guess(request, game_id: str, guess: Guess):
    # Call game class to validate guess and get result
    game = get_or_start_game(game_id)
    new_state = game.guess_word(guess.word)
    print(f"Goal Word: {game.goal_word}")

    db = get_db()
    path = f"games/wordguesser/{game_id}"
    game_ref = db.reference(path)
    message_ref = db.reference(f"{path}/message")
    guesses_ref = db.reference(f"{path}/guesses")

    # Set error message in game state if guess is not accepted
    if new_state["guess"] == "INVALID":
        message_ref.set(f"Invalid guess: {guess.word}")
        return format_json(message="Invalid guess.")

    # Since guess was accepted, clear previous message
    message_ref.delete()

    # Get guesses saved so far
    raw_guesses = guesses_ref.get() or {}
    next_index = len(raw_guesses)

    # If game is over, update message and victory status
    n_guesses = len(raw_guesses) + 1
    is_win = game.check_win()
    if is_win or n_guesses == MAX_GUESSES:
        end_message = game.end_game()
        message_ref.set(end_message)
        game_ref.update({"message": end_message, "victory": is_win})

    # Save accepted guess to game state in database
    next_ref = db.reference(f"{path}/guesses/{next_index}")
    next_ref.set(new_state)

    return format_json(message="Guess submitted successfully.")
