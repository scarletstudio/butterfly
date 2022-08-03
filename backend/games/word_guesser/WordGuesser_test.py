import pytest

from backend.games.word_guesser.WordGuesser import WordGuesser

MAX_GUESSES = 6
WORD_LIST = [
    "adieu",
    "odium",
    "shade",
    "resin",
    "alert",
    "haunt",
    "orate",
    "media",
    "blind",
    "route",
    "audio",
    "pause",
    "alien",
    "canoe",
    "plane",
    "rouse",
    "fraud",
    "atone",
    "raise",
    "minor",
]


def test_start_game():
    game = WordGuesser()
    game.start_game()
    word = game.goal_word
    assert word in WORD_LIST


# hard code goal word and bad guess
def test_bad_guess():
    game = WordGuesser()
    word = game.goal_word

    game.guess_word("minor")
    expected_guess = {
        "guess": "minor",
        "results": [
            "not_in_word",
            "in_word",
            "not_in_word",
            "not_in_word",
            "not_in_word",
        ],
    }
    assert game.guesses == expected_guess


# hard code goal word and good guess
def test_good_guess():
    game = WordGuesser()
    word = game.goal_word

    game.guess_word("basic")
    expected_guess = {
        "guess": "basic",
        "results": [
            "correct",
            "correct",
            "correct",
            "correct",
            "correct",
        ],
    }
    assert game.guesses == expected_guess


def test_check_win():
    game = WordGuesser()
    word = game.goal_word

    game.guess_word("lower")
    game.guess_word("porky")
    game.guess_word("crane")
    game.guess_word("basic")
    assert game.check_win() == True
    assert game.end_game() == "You guessed the word!! Nice Job"


def test_check_lose():
    game = WordGuesser()
    word = game.goal_word

    game.guess_word("lower")
    game.guess_word("porky")
    game.guess_word("crane")
    game.guess_word("plows")
    game.guess_word("weigh")
    game.guess_word("house")
    game.guess_word("testy")
    assert game.check_win() == False
    assert (
        game.end_game()
        == "You failed to guess the word in 6 guesses. better luck next time."
    )


def test_validation():
    game = WordGuesser()

    normal_word = game.validate_guess("guess")
    assert normal_word == True

    normal_word = game.validate_guess("gue1s")
    assert normal_word == False

    normal_word = game.validate_guess("guesses")
    assert normal_word == False


def test_track_progress():
    pass
