import React from 'react'

import SearchMessages from './SearchMessages'
import { getMockUser } from '../mock'

export default {
    title: 'Chat Menu Pages/SearchMessages',
    component: SearchMessages,
}

const Template = (args) => <SearchMessages {...args} />

const baseChatData = {
    chat: {
        for: 'asabe',
        participants: {
            asabe: getMockUser('asabe'),
            pradeep: getMockUser('pradeep'),
        },
    },
    messages: [],
}
// TODO: Set args with the props to test a case of your component
const shortMessages = [
    {
        from: 'pradeep',
        type: 'MESSAGE',
        timestamp: 0,
        message: "Hey, what's up?",
    },
    {
        from: 'asabe',
        type: 'MESSAGE',
        timestamp: 1,
        message: 'Not much, how about you?',
    },
]

export const EmptySearch = Template.bind({})
EmptySearch.args = { ...baseChatData }

export const FoundSearch = Template.bind({})
FoundSearch.args = { ...baseChatData, messages: [...shortMessages] }

// TODO: Add more cases to test your component
