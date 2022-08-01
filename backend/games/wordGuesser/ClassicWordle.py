from typing import List


class ClassicWordle:
    # maximum number of guesses
    MAX_GUESSES = 6
    # represents the state of the game, index 0 will hold the "goal word"
    gameBoard = List[str]

    # clears any previous activity and randomizes a word to initialize the list
    def startGame(self) -> List[str]:
        pass

    # clears all previous progress and calls checkWin() to determine final results
    # will return a victory or failure string
    def endGame(self) -> str:
        pass

    # performs all logic checks on a word to determine if it is valid
    # takes a word and updates the board based on
    def guessWordle(self, guess: str) -> List[str]:
        pass

    # returns list of letters correctly guessed
    # capital= right letter, right space
    # lower = right letter wrong space
    def trackProgress(self) -> List[str]:
        pass

    # checks to see if win/lose conditions have been satisfied
    # meant to run after each guess, and after MAX_GUESS has been reached
    def checkWin(self) -> bool:
        pass
