import React from 'react'

import EditIntents from './EditIntents'

export default {
    title: 'Edit Attributes/EditIntents',
    component: EditIntents,
}

// eslint-disable-next-line no-console
const fakeUpdateIntent = (code, side, value) => console.log('Updated:', code, side, value)

const Template = (args) => <EditIntents {...args} />

export const NoIntentsSelected = Template.bind({})
NoIntentsSelected.args = {
    intents: [
        { code: 'tutoring', name: 'Tutoring' },
        { code: 'tv-movie-recs', name: 'TV/Movie Recommendations' },
        { code: 'student-org', name: 'Get information on student organizations' },
        { code: 'commons-food', name: 'Learn more about the commons food' },
        { code: 'hobbies', name: 'Learn more about different hobbies' },
    ],
    userIntentMap: {},
    updateIntent: fakeUpdateIntent,
}

export const SomeIntentsSelected = Template.bind({})
SomeIntentsSelected.args = {
    intents: [
        { code: 'tutoring', name: 'Tutoring' },
        { code: 'tv-movie-recs', name: 'TV/Movie Recommendations' },
        { code: 'student-org', name: 'Get information on student organizations' },
        { code: 'commons-food', name: 'Learn more about the commons food' },
        { code: 'hobbies', name: 'Learn more about different hobbies' },
    ],
    userIntentMap: {
        tutoring: { seeking: true, giving: false },
        'tv-movie-recs': { seeking: true, giving: true },
        'student-org': { seeking: false, giving: true },
        'commons-food': { seeking: true, giving: false },
        hobbies: { seeking: false, giving: false },
    },
    updateIntent: fakeUpdateIntent,
}
