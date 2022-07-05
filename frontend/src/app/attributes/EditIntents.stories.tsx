import React from 'react'

import EditIntents from './EditIntents'

export default {
    title: 'Edit Attributes/EditIntents',
    component: EditIntents,
}

const Template = (args) => <EditIntents {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {
    intents: [
        { code: 'tutoring', name: 'Tutoring' },
        { code: 'tv-movie-recs', name: 'TV/Movie Recommendations' },
    ],
}

// TODO: Add more cases to test your component
