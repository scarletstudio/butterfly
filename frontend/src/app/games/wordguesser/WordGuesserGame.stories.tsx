import React from 'react'

import { WordGuesserGame } from './WordGuesserGame'

export default {
    title: 'Games/WordGuesser/WordGuesserGame',
    component: WordGuesserGame,
}

const Template = (args) => <WordGuesserGame {...args} />

const noLettersInWord = ['not_in_word', 'not_in_word', 'not_in_word', 'not_in_word', 'not_in_word']

// eslint-disable-next-line no-console
const submitGuess = (word) => console.log(`Next Guess: ${word}`)

export const NoGuesses = Template.bind({})
NoGuesses.args = {}

export const OneGuess = Template.bind({})
OneGuess.args = {
    submitGuess,
    gameState: {
        guesses: [
            {
                guess: 'GHOST',
                results: ['correct', 'not_in_word', 'in_word', 'not_in_word', 'not_in_word'],
            },
        ],
    },
}

export const SomeGuesses = Template.bind({})
SomeGuesses.args = {
    submitGuess,
    gameState: {
        guesses: [
            { guess: 'GHOST', results: noLettersInWord },
            { guess: 'BRAIN', results: noLettersInWord },
            { guess: 'YEARN', results: noLettersInWord },
        ],
    },
}

export const FullGuesses = Template.bind({})
FullGuesses.args = {
    submitGuess,
    gameState: {
        guesses: [
            { guess: 'GHOST', results: noLettersInWord },
            { guess: 'BRAIN', results: noLettersInWord },
            { guess: 'YEARN', results: noLettersInWord },
            { guess: 'PLANT', results: noLettersInWord },
            { guess: 'PURGE', results: noLettersInWord },
            { guess: 'FLOOP', results: noLettersInWord },
        ],
    },
}
