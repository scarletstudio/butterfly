import React from 'react'

import RateMatch from './RateMatch'

export default {
    title: 'Chat Menu Pages/RateMatch',
    component: RateMatch,
}

const Template = (args) => <RateMatch {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {
    chat : {
        participants : [{displayName: "Prince"}, {displayName: "Amir"}]
    }
}

// TODO: Add more cases to test your component
