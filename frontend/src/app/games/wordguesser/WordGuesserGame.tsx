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

function padGuess(guess) {
    return guess + BLANK.repeat(WORD_LENGTH - guess.length)
}

const Header = () => {
    return (
        <div className="GameHeader">
            <h2 className="Title">Word Guesser</h2>
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

const KeyTile = ({ letter, onClick }) => {
    const onKeyDown = (e) => e.keyCode === 13 && onClick()
    return (
        <div className="KeyTile" role="button" onClick={onClick} onKeyDown={onKeyDown} tabIndex={0}>
            {letter}
        </div>
    )
}

const Keyboard = ({ setGuess, submit }) => {
    const addLetter = (letter) => {
        setGuess((prev) => {
            if (prev?.length >= WORD_LENGTH) return prev
            return prev + letter
        })
    }
    const deleteLetter = () => {
        setGuess((prev) => {
            const length = prev?.length
            if (length === 0) return prev
            return prev.substr(0, length - 1)
        })
    }

    const deleteIcon = <FontAwesomeIcon icon={faDeleteLeft} />
    const deleteKey = <KeyTile key={DELETE_KEY} letter={deleteIcon} onClick={deleteLetter} />

    const enterIcon = <FontAwesomeIcon icon={faRightToBracket} />
    const enterKey = <KeyTile key={ENTER_KEY} letter={enterIcon} onClick={submit} />

    const rowEls = KEYBOARD_ROWS.map((row, i) => {
        const keyEls = row
            .split('')
            .map((letter) => (
                <KeyTile key={letter} letter={letter} onClick={() => addLetter(letter)} />
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

export function WordGuesserGame({ gameState }: { gameState: GameState }) {
    const [nextGuess, setNextGuess] = useState('')

    const pastGuesses = gameState?.guesses || []
    const nextGuessRecord = { guess: padGuess(nextGuess), results: [] }
    const guesses = [...pastGuesses, nextGuessRecord]

    const submitGuess = () => {
        if (pastGuesses.length >= GUESSES) return
        if (nextGuess.length !== WORD_LENGTH) return
        // eslint-disable-next-line no-console
        console.log(`Next Guess: ${nextGuess}`)
        setNextGuess('')
    }

    return (
        <div className="WordGuesserGame">
            <Header />
            <Board guesses={guesses} />
            <Keyboard setGuess={setNextGuess} submit={submitGuess} />
        </div>
    )
}
