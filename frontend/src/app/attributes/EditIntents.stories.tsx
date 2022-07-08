import React from 'react'

import EditIntents from './EditIntents'

export default {
    title: 'Edit Attributes/EditIntents',
    component: EditIntents,
}

// eslint-disable-next-line no-console
const fakeUpdateIntent = (code, side, value) => console.log('Updated:', code, side, value)

const Template = (args) => <EditIntents {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {
    intents: [
        { code: 'tutoring', name: 'Tutoring' },
        { code: 'tv-movie-recs', name: 'TV/Movie Recommendations' },
    ],
    userIntentMap: {
        tutoring: { seeking: true },
        'tv-movie-recs': { giving: false, seeking: true },
    },
    updateIntent: fakeUpdateIntent,
}

// TODO: Add more cases to test your component
