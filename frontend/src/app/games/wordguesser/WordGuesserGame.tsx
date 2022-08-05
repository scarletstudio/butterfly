import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import './WordGuesserGame.css'

interface GuessRecord {
    guess: string
    results: Array<string>
}

interface GameState {
    guesses?: Array<GuessRecord>
}

interface GameProps {
    gameState: GameState
    submitGuess(word: string): void
}

const WORD_LENGTH = 5
const GUESSES = 6

const BLANK = ' '
const EMPTY_WORD = BLANK.repeat(WORD_LENGTH)
const EMPTY_GUESS: GuessRecord = { guess: EMPTY_WORD, results: [] }

const DELETE_KEY = 'DEL'
const ENTER_KEY = 'ENTER'
const KEYBOARD_ROWS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM']

const RESULT_CLASSES = {
    correct: 'Correct',
    in_word: 'InWord',
    not_in_word: 'NotInWord',
}

const padGuess = (guess) => guess + BLANK.repeat(WORD_LENGTH - guess.length)

/*
 * Aggregates a list of guess records into a dictionary with the latest result
 * for each letter that has been guessed.
 */
const getKeyResults = (guesses: Array<GuessRecord>) => {
    return guesses.reduce((keyResults, { guess, results }) => {
        const guessResults = guess.split('').reduce(
            (agg, letter, i) => ({
                ...agg,
                [letter]: results?.[i],
            }),
            {}
        )

        return { ...keyResults, ...guessResults }
    }, {})
}

const Header = () => {
    return (
        <div className="GameHeader">
            <h2 className="Title">Vocable</h2>
            <p>
                Find the {WORD_LENGTH}-letter word in {GUESSES} guesses.
            </p>
        </div>
    )
}

const GuessTile = ({ letter, result }) => {
    const resultClass = RESULT_CLASSES?.[result] || ''
    return <div className={`GuessTile ${resultClass}`}>{letter}</div>
}

const GuessRow = ({ guess }: { guess: GuessRecord }) => {
    const guessWord = guess.guess || ''
    const letters = guessWord.split('')
    return (
        <div className="GuessRow">
            {letters.map((letter, i) => {
                const key = `${i}-${letter}`
                const result = guess.results?.[i]
                const tileEl = <GuessTile key={key} letter={letter} result={result} />
                return i < WORD_LENGTH && tileEl
            })}
        </div>
    )
}

const Board = ({ guesses = [] }: { guesses: Array<GuessRecord> }) => {
    const guessArray = Array.from(Array(GUESSES).keys())
    const rows = guessArray.map((i) => {
        const guess = guesses?.[i] || EMPTY_GUESS
        const key = `${i}-${guess}`
        return { key, guess }
    })
    return (
        <div className="GameBoard">
            {rows.map(({ key, guess }) => (
                <GuessRow key={key} guess={guess} />
            ))}
        </div>
    )
}

const KeyTile = ({ letter, onClick, result = '' }) => {
    const resultClass = RESULT_CLASSES?.[result] || ''
    const onKeyDown = (e) => e.keyCode === 13 && onClick()
    return (
        <div
            className={`KeyTile ${resultClass}`}
            role="button"
            onClick={onClick}
            onKeyDown={onKeyDown}
            tabIndex={0}
        >
            {letter}
        </div>
    )
}

const Keyboard = ({ setGuess, submitGuess, results }) => {
    const addLetter = (letter: string) => {
        setGuess((prev: string) => {
            if (prev?.length >= WORD_LENGTH) return prev
            return prev + letter
        })
    }
    const deleteLetter = () => {
        setGuess((prev: string) => {
            const length = prev?.length
            if (length === 0) return prev
            return prev.substring(0, length - 1)
        })
    }

    const deleteIcon = <FontAwesomeIcon icon={faDeleteLeft} />
    const deleteKey = <KeyTile key={DELETE_KEY} letter={deleteIcon} onClick={deleteLetter} />

    const enterIcon = <FontAwesomeIcon icon={faRightToBracket} />
    const enterKey = <KeyTile key={ENTER_KEY} letter={enterIcon} onClick={submitGuess} />

    const rowEls = KEYBOARD_ROWS.map((row, i) => {
        const keyEls = row
            .split('')
            .map((letter) => (
                <KeyTile
                    key={letter}
                    letter={letter}
                    onClick={() => addLetter(letter)}
                    result={results?.[letter]}
                />
            ))
        const isLastRow = i === KEYBOARD_ROWS.length - 1
        return (
            <div key={row} className="KeyboardRow">
                {isLastRow && enterKey}
                {keyEls}
                {isLastRow && deleteKey}
            </div>
        )
    })

    return <div className="Keyboard">{rowEls}</div>
}

export function WordGuesserGame({ gameState, submitGuess }: GameProps) {
    const [nextGuess, setNextGuess] = useState('')

    // Add the next guess as a preview on the game board
    const pastGuesses = gameState?.guesses || []
    const nextGuessRecord = { guess: padGuess(nextGuess), results: [] }
    const guesses = [...pastGuesses, nextGuessRecord]

    // Derive which letters have been used and their latest result
    const keyResults = getKeyResults(guesses)

    const submitNextGuess = () => {
        if (pastGuesses.length >= GUESSES) return
        if (nextGuess.length !== WORD_LENGTH) return
        submitGuess(nextGuess)
        setNextGuess('')
    }

    return (
        <div className="WordGuesserGame">
            <Header />
            <Board guesses={guesses} />
            <Keyboard setGuess={setNextGuess} submitGuess={submitNextGuess} results={keyResults} />
        </div>
    )
}
