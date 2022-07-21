import React from 'react'

import { SchedulesStarterInner } from './SchedulesStarter'

export default {
    title: 'Conversation Starters/SchedulesStarter',
    component: SchedulesStarterInner,
}

const Template = (args) => <SchedulesStarterInner {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {
    availabilities: [
        { day: 'Mon', hour: 9 },
        { day: 'Tue', hour: 11 },
        { day: 'Wed', hour: 6 },
        { day: 'Thu', hour: 13 },
        { day: 'Fri', hour: 7 },
    ],
}

// TODO: Add more cases to test your component
