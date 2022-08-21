import React from 'react'

import { WordGuesserGame } from './WordGuesserGame'

export default {
    title: 'Games/WordGuesser/WordGuesserGame',
    component: WordGuesserGame,
}

const Template = (args) => <WordGuesserGame {...args} />

const noLettersInWord = ['not_in_word', 'not_in_word', 'not_in_word', 'not_in_word', 'not_in_word']
const correctWord = ['correct', 'correct', 'correct', 'correct', 'correct']

// eslint-disable-next-line no-console
const submitGuess = (word) => console.log(`Next Guess: ${word}`)
// eslint-disable-next-line no-console
const restartGame = () => console.log('Restart Game')
const props = { submitGuess, restartGame }

export const NoGuesses = Template.bind({})
NoGuesses.args = { ...props }

export const OneGuess = Template.bind({})
OneGuess.args = {
    ...props,
    gameState: {
        guesses: [
            {
                guess: 'ghost',
                results: ['correct', 'not_in_word', 'in_word', 'not_in_word', 'not_in_word'],
            },
        ],
    },
}

export const SomeGuesses = Template.bind({})
SomeGuesses.args = {
    ...props,
    gameState: {
        guesses: [
            { guess: 'ghost', results: noLettersInWord },
            { guess: 'brain', results: noLettersInWord },
            { guess: 'yearn', results: noLettersInWord },
        ],
    },
}

export const FullGuesses = Template.bind({})
FullGuesses.args = {
    ...props,
    gameState: {
        guesses: [
            { guess: 'ghost', results: noLettersInWord },
            { guess: 'brain', results: noLettersInWord },
            { guess: 'yearn', results: noLettersInWord },
            { guess: 'plant', results: noLettersInWord },
            { guess: 'purge', results: noLettersInWord },
            { guess: 'floop', results: noLettersInWord },
        ],
        message: 'No guesses left. The word was vvvvv.',
        victory: false,
    },
}

export const InvalidGuess = Template.bind({})
InvalidGuess.args = {
    ...props,
    gameState: {
        message: 'Invalid guess: phyxs',
    },
}

export const CorrectGuess = Template.bind({})
CorrectGuess.args = {
    ...props,
    gameState: {
        guesses: [{ guess: 'prank', results: correctWord }],
        message: 'Congratulations, you got the word!',
        victory: true,
    },
}
