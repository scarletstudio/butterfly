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
    ],
    userIntentMap: {},
    updateIntent: fakeUpdateIntent,
}

export const SomeIntentsSelected = Template.bind({})
SomeIntentsSelected.args = {
    intents: [
        { code: 'tutoring', name: 'Tutoring' },
        { code: 'tv-movie-recs', name: 'TV/Movie Recommendations' },
    ],
    userIntentMap: {
        tutoring: { seeking: true, giving: false },
        'tv-movie-recs': { seeking: true, giving: true },
    },
    updateIntent: fakeUpdateIntent,
}
