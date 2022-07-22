import React from 'react'

import BlockUser from './BlockUser'

export default {
    title: 'Chat Menu Pages/BlockUser',
    component: BlockUser,
}

const Template = (args) => <BlockUser {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {}

// TODO: Add more cases to test your component
