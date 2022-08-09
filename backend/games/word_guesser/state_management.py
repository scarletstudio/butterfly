from typing import Any, Dict

from backend.games.word_guesser.WordGuesser import MAX_GUESSES, WordGuesser


def get_next_game_state(game: WordGuesser, word: str, state: Dict) -> Dict:
    """Gets the next game state based on the guess."""
    next_state: Dict[str, Any] = {
        "guesses": [],
        "message": None,
        "victory": False,
        **state,
    }
    next_guess = game.guess_word(word)

    # If guess was not accepted, add an error message, no other state updates
    if next_guess["guess"] == "INVALID":
        next_state["message"] = f"Invalid guess: {word}"
        return next_state

    # If guess was accepted, add it to the state
    next_state["guesses"].append(next_guess)
    next_state["message"] = None

    # If game is over, update message and victory status
    n_guesses = len(next_state["guesses"])
    is_win = game.check_win()
    if is_win or n_guesses == MAX_GUESSES:
        next_state["message"] = game.end_game()
        next_state["victory"] = is_win

    return next_state
