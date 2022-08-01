import React from 'react'

import { WordGuesserGame } from './WordGuesserGame'

export default {
    title: 'Games/WordGuesser/WordGuesserGame',
    component: WordGuesserGame,
}
const Template = (args) => <WordGuesserGame {...args} />

export const EmtpyGame = Template.bind({})
EmtpyGame.args = {}
