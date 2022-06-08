import React from 'react'

import SchedulesStarter from './SchedulesStarter'

export default {
    title: 'Conversation Starters/SchedulesStarter',
    component: SchedulesStarter,
}

const Template = (args) => <SchedulesStarter {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {}

// TODO: Add more cases to test your component
