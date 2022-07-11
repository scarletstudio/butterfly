import React from 'react'

import EditInterests from './EditInterests'

export default {
    title: 'Edit Attributes/EditInterests',
    component: EditInterests,
}
const fakeUpdateInterest = (code, value) => {
    // eslint-disable-next-line no-console
    console.log('Updated your interest!', code, value)
}
const Template = (args) => <EditInterests {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {
    allInterests: [
        { code: 'anime', name: 'Anime' },
        { code: 'coding', name: 'Coding' },
        { code: 'cooking', name: 'Cooking' },
        { code: 'traveling', name: 'Traveling' },
        { code: 'reading', name: 'Reading' },
    ],
    userInterestsMap: {},
    updateInterest: fakeUpdateInterest,
}

// TODO: Add more cases to test your component
