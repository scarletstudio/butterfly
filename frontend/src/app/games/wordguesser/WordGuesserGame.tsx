import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import './WordGuesserGame.css'

const BLANK = ' '
const WORD_LENGTH = 5
const GUESSES = 6

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

const GuessTile = ({ letter }) => {
    return <div className="GuessTile">{letter}</div>
}

const GuessRow = ({ guess }) => {
    const letters = guess.split('')
    return (
        <div className="GuessRow">
            {letters.map((letter, i) => {
                const key = `${i}-${letter}`
                const tileEl = <GuessTile key={key} letter={letter} />
                return i < WORD_LENGTH && tileEl
            })}
        </div>
    )
}

const Board = ({ guesses = [] }: { guesses: Array<string> }) => {
    const wordArray = Array.from(Array(WORD_LENGTH).keys())
    const guessArray = Array.from(Array(GUESSES).keys())
    const emptyGuess = wordArray.map(() => BLANK).join('')
    const rows = guessArray.map((i) => {
        const guess = guesses?.[i] || emptyGuess
        // Add extra spaces to a guess
        const paddedGuess = guess + emptyGuess
        const key = `${i}-${guess}`
        return { key, guess: paddedGuess }
    })
    return (
        <div className="GameBoard">
            {rows.map(({ key, guess }) => (
                <GuessRow key={key} guess={guess} />
            ))}
        </div>
    )
}

const DELETE_KEY = 'DEL'
const ENTER_KEY = 'ENTER'
const KEYBOARD_ROWS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM']

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

interface GameState {
    guesses?: Array<string>
}

export function WordGuesserGame({ gameState }: { gameState: GameState }) {
    const [nextGuess, setNextGuess] = useState('')
    // eslint-disable-next-line no-console
    const submitGuess = () => console.log(`Next Guess: ${nextGuess}`)
    const pastGuesses = gameState?.guesses || []
    const guesses = [...pastGuesses, nextGuess]
    return (
        <div className="WordGuesserGame">
            <Header />
            <Board guesses={guesses} />
            <Keyboard setGuess={setNextGuess} submit={submitGuess} />
        </div>
    )
}
