from random import randint
from typing import Dict, List

MAX_GUESSES = 6

# initialize valid guesses and possible solutions
SOLUTIONS: str
VALID_WORDS: str

solutions_file = open("backend/games/word_guesser/WordGuesser_Solutions.txt")
guesses_file = open("backend/games/word_guesser/WordGuesser_ValidGuesses.txt")
SOLUTIONS = solutions_file.read()
SOLUTION_LIST = SOLUTIONS.splitlines()

VALID_WORDS = guesses_file.read()
VALID_WORDS_LIST = VALID_WORDS.splitlines()


class WordGuesser:
    def __init__(self):
        self.guesses = {"guess": "", "results": []}
        self.game_board: List[str] = []
        self.progress: Dict = {}
        self.goal_word = "basic"
        self.guess_count = 0

    def clear_data(self):
        self.guesses = {"guess": "", "results": []}
        self.game_board: List[str] = []
        self.progress: Dict = {}
        self.goal_word = ""
        self.guess_count = 0

    def start_game(self):
        self.clear_data()

        new_word_index = randint(0, len(SOLUTION_LIST) - 1)  # nosec
        self.goal_word = SOLUTION_LIST[new_word_index]

    def end_game(self) -> str:
        output = self.check_win()
        if output == True:
            return "You guessed the word!! Nice Job"
        else:
            return "You failed to guess the word in 6 guesses. better luck next time."

    # holds game history
    def track_progress(self) -> Dict:
        tmp_keys = ""
        tmp_results = []
        for k, v in self.guesses.items():
            if "guess" in k:
                tmp_keys = v
            if "results" in k:
                tmp_results = v
            self.progress[tmp_keys] = tmp_results
        print(self.progress)
        return self.progress

    def check_win(self) -> bool:
        idx = len(self.game_board) - 1
        if self.game_board[idx] == self.goal_word:
            return True
        elif self.guess_count > 6:
            return False
        return False

    # performs all logic checks on a word to determine if it is valid
    def validate_guess(self, guess) -> bool:
        if len(guess) != 5:
            return False
        if not guess.isalpha():
            return False
        if guess not in VALID_WORDS:
            return False
        return True

    def guess_word(self, guess: str) -> Dict:
        if self.validate_guess(guess):
            curr_results: List[str] = []
            goal = self.goal_word
            i = 0
            for char in guess:
                if char is goal[i]:
                    curr_results.append("correct")
                elif (char in goal) and (char is not goal[i]):
                    curr_results.append("in_word")
                else:
                    curr_results.append("not_in_word")
                i += 1

            # note that the previous guess is overwritten
            self.guesses["guess"] = guess
            self.guesses["results"] = curr_results
            self.game_board.append(self.guesses["guess"])
            self.guess_count += 1

            self.track_progress()

            if self.guess_count == MAX_GUESSES:
                self.end_game()
        else:
            self.guesses["guess"] = "INVALID"
            self.guesses["results"] = [
                "INVALID",
                "INVALID",
                "INVALID",
                "INVALID",
                "INVALID",
            ]

        return self.guesses
