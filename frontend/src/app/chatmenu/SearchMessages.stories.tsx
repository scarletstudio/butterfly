import React from 'react'

import SearchMessages from './SearchMessages'

export default {
    title: 'Chat Menu Pages/SearchMessages',
    component: SearchMessages,
}

const Template = (args) => <SearchMessages {...args} />

// TODO: Set args with the props to test a case of your component
export const EmptySearch = Template.bind({})
EmptySearch.args = {}

export const FoundSearch = Template.bind({})
FoundSearch.args = {}

// TODO: Add more cases to test your component
