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

# basic expected behavior
def test_constructor():
    game = WordGuesser()

    assert game.goal_word == ""


def test_start_game():
    game = WordGuesser()
    game.start_game()
    word = game.goal_word
    assert word in WORD_LIST


def test_guesses():
    game = WordGuesser()
    game.start_game()
    word = game.goal_word

    game.guess_word("minor")
    tmp_guess = {
        "guess": "minor",
        "results": [
            "correct",
            "not_in_word",
            "not_in_word",
            "in_word",
            "not_in_word",
        ],
    }
    assert game.guesses["guess"] == tmp_guess["guess"]


# def test_invalid_guesses():
#     game = WordGuesser()
#     game.start_game()
#     word = game.goal_word

#     game.guess_word("lower")
#     game.guess_word("porky")
#     game.guess_word("crane")
#     game.guess_word("plows")
#     game.guess_word("weigh")
#     game.guess_word("house")
#     game.guess_word("testy")
