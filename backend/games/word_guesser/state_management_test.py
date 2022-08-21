from backend.games.word_guesser.state_management import get_next_game_state
from backend.games.word_guesser.WordGuesser import WordGuesser

NO_CORRECT_LETTERS = [
    "not_in_word",
    "not_in_word",
    "not_in_word",
    "not_in_word",
    "not_in_word",
]


def test_state_first_guess():
    # Note: If you do not call game.start_game(), the goal word will be "basic"
    game = WordGuesser()
    word = "bound"
    previous_state = {}

    actual = get_next_game_state(game, word, previous_state)

    expected = {
        "guesses": [
            {
                "guess": "bound",
                "results": [
                    "correct",
                    "not_in_word",
                    "not_in_word",
                    "not_in_word",
                    "not_in_word",
                ],
            }
        ],
        "message": None,
        "victory": False,
    }
    assert actual == expected, "First guess should be added to game state."


def test_state_next_guess():
    # Note: If you do not call game.start_game(), the goal word will be "basic"
    game = WordGuesser()
    word = "downy"
    previous_state = {
        "guesses": [
            {"guess": "close", "results": NO_CORRECT_LETTERS},
            {"guess": "ghost", "results": NO_CORRECT_LETTERS},
            {"guess": "fence", "results": NO_CORRECT_LETTERS},
        ]
    }

    actual = get_next_game_state(game, word, previous_state)

    expected = {
        "guesses": [
            {"guess": "close", "results": NO_CORRECT_LETTERS},
            {"guess": "ghost", "results": NO_CORRECT_LETTERS},
            {"guess": "fence", "results": NO_CORRECT_LETTERS},
            {"guess": "downy", "results": NO_CORRECT_LETTERS},
        ],
        "message": None,
        "victory": False,
    }
    assert actual == expected, "Next guess should be added to previous guesses."


def test_state_invalid_guess():
    # Note: If you do not call game.start_game(), the goal word will be "basic"
    game = WordGuesser()
    word = "hgjkd"
    previous_state = {}

    actual = get_next_game_state(game, word, previous_state)

    expected = {
        "guesses": [],
        "message": "Invalid guess: hgjkd",
        "victory": False,
    }
    assert actual == expected, "Invalid guess should not be added to state."


def test_state_clear_invalid_message():
    # Note: If you do not call game.start_game(), the goal word will be "basic"
    game = WordGuesser()
    word = "downy"
    previous_state = {"message": "Invalid guess: hgjkd"}

    actual = get_next_game_state(game, word, previous_state)

    expected = {
        "guesses": [{"guess": "downy", "results": NO_CORRECT_LETTERS}],
        "message": None,
        "victory": False,
    }
    assert actual == expected, "Valid guess should clear the previous message."


def test_state_victory():
    # Note: If you do not call game.start_game(), the goal word will be "basic"
    game = WordGuesser()
    word = "basic"
    previous_state = {}

    actual = get_next_game_state(game, word, previous_state)

    expected = {
        "guesses": [
            {
                "guess": "basic",
                "results": [
                    "correct",
                    "correct",
                    "correct",
                    "correct",
                    "correct",
                ],
            }
        ],
        "message": "You guessed the word!! Nice Job",
        "victory": True,
    }
    assert actual == expected, "Guessing the goal word should lead to victory."


def test_state_defeat():
    # Note: If you do not call game.start_game(), the goal word will be "basic"
    game = WordGuesser()
    word = "groof"
    previous_state = {
        "guesses": [
            {"guess": "close", "results": NO_CORRECT_LETTERS},
            {"guess": "ghost", "results": NO_CORRECT_LETTERS},
            {"guess": "fence", "results": NO_CORRECT_LETTERS},
            {"guess": "downy", "results": NO_CORRECT_LETTERS},
            {"guess": "exurb", "results": NO_CORRECT_LETTERS},
        ]
    }

    actual = get_next_game_state(game, word, previous_state)

    defeat = "You failed to guess the word in 6 guesses. better luck next time."
    expected = {
        "guesses": [
            {"guess": "close", "results": NO_CORRECT_LETTERS},
            {"guess": "ghost", "results": NO_CORRECT_LETTERS},
            {"guess": "fence", "results": NO_CORRECT_LETTERS},
            {"guess": "downy", "results": NO_CORRECT_LETTERS},
            {"guess": "exurb", "results": NO_CORRECT_LETTERS},
            {"guess": "groof", "results": NO_CORRECT_LETTERS},
        ],
        "message": defeat,
        "victory": False,
    }
    assert actual == expected, "Using up all guesses should lead to defeat."
