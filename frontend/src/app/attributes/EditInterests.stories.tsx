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

export const NothingSelected = Template.bind({})
NothingSelected.args = {
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

export const DefaultSelected = Template.bind({})
DefaultSelected.args = {
    allInterests: [
        { code: 'anime', name: 'Anime' },
        { code: 'coding', name: 'Coding' },
        { code: 'cooking', name: 'Cooking' },
        { code: 'traveling', name: 'Traveling' },
        { code: 'reading', name: 'Reading' },
    ],
    userInterestsMap: {
        anime: true,
        cooking: true,
        reading: false,
    },
    updateInterest: fakeUpdateInterest,
}
