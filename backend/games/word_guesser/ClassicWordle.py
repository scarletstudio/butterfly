from random import randint
from typing import Dict, List


class ClassicWordle:
    # maximum number of guesses
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

    def __init__(self):
        # represents the state of the game, index 0 will hold the "goal word"
        game_board = List[str]
        guesses = {"guess1": "", "results": []}
        goal_word = ""
        guess_count = 0

    # clears any previous activity and randomizes a word to initialize the list
    def start_game(self) -> List[str]:
        # clear past game data
        guesses = {"guess1": "", "results1": []}
        game_board = [""]
        goal_word = str
        guess_count = 0

        # randomize next word
        new_word_index = randint(0, 19)  # nosec
        goal_word = WORD_LIST[new_word_index]
        return game_board

    # clears all previous progress and calls checkWin() to determine final results
    # will return a victory or failure string
    def end_game(self) -> str:
        guesses = {"guess1": "", "results1": []}
        game_board = List[str]
        goal_word = ""
        guess_count = 0

        if check_win():
            return "You guessed the word!! Nice Job"
        else:
            return "You failed to guess the word in 6 guesses. better luck next time."

    """
        -returns a dict containing the guess and its correctness
        -list will determine correctness of each letter in guess in the form of :
            "correct", "in_word", "not_in_word"
        -updates guesses dict
    """

    def track_progress(self) -> Dict:
        progress = {}
        tmp_keys = ""
        tmp_results = []
        for k, v in guesses.items():
            if k.contains("guess"):
                tmp_keys = v
            if k.contains("results"):
                tmp_results = v
            progress[temp_keys] = tmp_results

        return progress

    # checks to see if win/lose conditions have been satisfied
    # meant to run after each guess, and after MAX_GUESS has been reached
    def check_win(self) -> bool:
        if game_board[-1] == goal_word:
            return True
        elif guess_count >= 6:
            return False
        return False

    # performs all logic checks on a word to determine if it is valid
    def validate_guess(self, guess) -> bool:
        if len(guess) != 5:
            print("Word length must be 5.")
            return False
        if not isalpha():
            print("Word can only contain letters, uppercase or lowercase")
            return False
        return True
        # add clause to check if word is an actual word and not "aaabb"

    # performs all logic checks on a word to determine if it is valid
    # returns correctness of guess then adds new set of k,v pairs to guesses
    def guess_wordle(self, guess: str):
        if validate_word(guess):
            # add guess to game_board
            game_board.append(guess)

            # check the correctness
            curr_results = List[str]
            for i, char in enumerate(guess.split()):
                if char.lower() in goal_word.split()[i]:
                    curr_results[i] = "correct"
                elif (char.lower() in goal_word.split()) and (
                    char.lower() is not goal_word.split()[i]
                ):
                    curr_results[i] = "in_word"
                else:
                    curr_results[i] = "not_in_word"

            # track all guesses by labling them guess1, guess2, etc and inputing them as new dict entries
            key = "guess" + str(guess_count)
            value = "results" + str(guess_count)
            guesses[key] = guess
            guesses[value] = curr_results
            guess_count += 1

            # track progress here to update overall board
            track_progress()
            # check to see if win/lose conditions apply
            if guess_count >= 6:
                end_game()

        else:
            print("Invalid guess, please try again.")
