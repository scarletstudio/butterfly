import React from 'react'

import InterestsStarter from './InterestsStarter'

export default {
    title: 'Conversation Starters/InterestsStarter',
    component: InterestsStarter,
}

const Template = (args) => <InterestsStarter {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {}

// TODO: Add more cases to test your component
