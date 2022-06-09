import React from 'react'

import SearchMessages from './SearchMessages'

export default {
    title: 'Chat Menu Pages/SearchMessages',
    component: SearchMessages,
}

const Template = (args) => <SearchMessages {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {}

// TODO: Add more cases to test your component
