import React from 'react'

import CommonLettersStarter from './CommonLettersStarter'

export default {
    title: 'Conversation Starters/CommonLettersStarter',
    component: CommonLettersStarter,
}

const Template = (args) => <CommonLettersStarter {...args} />

export const ManyCommonLetters = Template.bind({})
ManyCommonLetters.args = {
    chat: { metadata: { commonLetters: ['a', 'n', 't'] } },
}

export const OneCommonLetter = Template.bind({})
OneCommonLetter.args = {
    chat: { metadata: { commonLetters: ['v'] } },
}
