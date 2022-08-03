from random import randint
from typing import Dict, List

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


class WordGuesser:
    def __init__(self):
        # represents the state of the game, index 0 will hold the "goal word"
        self.guesses = {"guess": "", "results": []}
        self.game_board: List[Dict] = [{}]
        self.progress: Dict = {}
        self.goal_word = ""
        self.guess_count = 0

    def clear_data(self):
        self.guesses = {"guess": "", "results": []}
        self.game_board: List[Dict] = [{}]
        self.progress: Dict = {}
        self.goal_word = ""
        self.guess_count = 0

    # clears any previous activity and randomizes a word to initialize the list
    def start_game(self):
        self.clear_data()

        # randomize next word
        new_word_index = randint(0, 19)  # nosec
        self.goal_word = WORD_LIST[new_word_index]

    # clears all previous progress and calls checkWin() to determine final results
    # will return a victory or failure string
    def end_game(self) -> str:
        self.clear_data()

        if self.check_win():
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
        tmp_keys = ""
        tmp_results = []
        for k, v in self.guesses.items():
            if "guess" in k:
                tmp_keys = v
            if "results" in k:
                tmp_results = v
            self.progress[tmp_keys] = tmp_results

        return self.progress

    # checks to see if win/lose conditions have been satisfied
    # meant to run after each guess, and after MAX_GUESS has been reached
    def check_win(self) -> bool:
        if self.game_board[-1] == self.goal_word:
            return True
        elif self.guess_count >= MAX_GUESSES:
            return False
        return False

    # performs all logic checks on a word to determine if it is valid
    def validate_guess(self, guess) -> bool:
        if len(guess) != 5:
            print("Word length must be 5.")
            return False
        if not guess.isalpha():
            print("Word can only contain letters, uppercase or lowercase")
            return False
        return True
        # add clause to check if word is an actual word and not "aaabb"

    # performs all logic checks on a word to determine if it is valid
    # returns correctness of guess then adds new set of k,v pairs to guesses
    def guess_word(self, guess: str) -> Dict:
        if self.validate_guess(guess):
            # check the correctness
            curr_results: List[str] = []
            goal = self.goal_word
            print("goal: " + goal)
            print("guess: " + guess)
            i = 0
            for char in guess:
                if char is goal[i]:
                    curr_results.append("correct")
                elif (char in goal) and (char is not goal[i]):
                    curr_results.append("in_word")
                else:
                    curr_results.append("not_in_word")
                i += 1
            print(curr_results)

            # overwrites previous guesses dict and appends it to a list
            self.guesses["guess"] = guess
            self.guesses["results"] = curr_results
            self.game_board.append(self.guesses)
            self.guess_count += 1

            # track progress here to update overall board
            self.track_progress()

            # check to see if win/lose conditions apply
            if self.guess_count >= MAX_GUESSES:
                self.end_game()
        else:
            print("Invalid guess, please try again.")
        return self.guesses
