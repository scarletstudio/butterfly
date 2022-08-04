import pytest

from backend.games.word_guesser.WordGuesser import WordGuesser

SOLUTIONS: str

solutions_file = open("backend/games/word_guesser/WordGuesser_Solutions.txt")
guesses_file = open("backend/games/word_guesser/WordGuesser_ValidGuesses.txt")
SOLUTIONS = solutions_file.read()
SOLUTION_LIST = SOLUTIONS.splitlines()


def test_start_game():
    game = WordGuesser()
    game.start_game()
    word = game.goal_word
    assert word in SOLUTION_LIST


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
    game.guess_word("house")
    game.guess_word("testy")
    assert game.check_win() == False
    assert (
        game.end_game()
        == "You failed to guess the word in 6 guesses. better luck next time."
    )


def test_more_than_six_guesses():
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
    invalid_guess = {
        "guess": "INVALID",
        "results": [
            "INVALID",
            "INVALID",
            "INVALID",
            "INVALID",
            "INVALID",
        ],
    }

    normal_word = game.validate_guess("guess")
    assert normal_word == True

    normal_word = game.validate_guess("gue1s")
    assert normal_word == False

    normal_word = game.validate_guess("guesses")
    assert normal_word == False

    guessed_word = game.guess_word("guesses")
    assert guessed_word == game.guesses

    guessed_word = game.guess_word("gues1")
    assert guessed_word == game.guesses


def test_track_progress():
    game = WordGuesser()
    game.guess_word("lower")
    game.guess_word("porky")
    game.guess_word("crane")
    progress = {
        "lower": [
            "not_in_word",
            "not_in_word",
            "not_in_word",
            "not_in_word",
            "not_in_word",
        ],
        "porky": [
            "not_in_word",
            "not_in_word",
            "not_in_word",
            "not_in_word",
            "not_in_word",
        ],
        "crane": [
            "in_word",
            "not_in_word",
            "in_word",
            "not_in_word",
            "not_in_word",
        ],
    }
    assert progress == game.progress