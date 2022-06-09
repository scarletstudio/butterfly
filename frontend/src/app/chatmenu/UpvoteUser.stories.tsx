import React from 'react'

import UpvoteUser from './UpvoteUser'

export default {
    title: 'Chat Menu Pages/UpvoteUser',
    component: UpvoteUser,
}

const Template = (args) => <UpvoteUser {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {}

// TODO: Add more cases to test your component
