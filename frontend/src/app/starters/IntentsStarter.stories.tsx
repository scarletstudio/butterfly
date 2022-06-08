import React from 'react'

import IntentsStarter from './IntentsStarter'

export default {
    title: 'Conversation Starters/IntentsStarter',
    component: IntentsStarter,
}

const Template = (args) => <IntentsStarter {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {}

// TODO: Add more cases to test your component
