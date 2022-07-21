import React from 'react'

import SearchMessages from './SearchMessages'
import { getMockUser } from '../mock'
import { withChatContext } from '../chat/Decorators'

export default {
    title: 'Chat Menu Pages/SearchMessages',
    component: SearchMessages,
}

const Template = (args) => <SearchMessages {...args} />

// TODO: Set args with the props to test a case of your component
const searchmessagesProps = {
    chat: {
        for: 'asabe',
        participants: {
            asabe: getMockUser('asabe'),
            pradeep: getMockUser('pradeep'),
        },
    },
    messages: [
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
    ],
}

export const EmptySearch = Template.bind({})
EmptySearch.args = {}

export const FoundSearch = Template.bind({})
FoundSearch.args = [withChatContext({ ...searchmessagesProps })]

// TODO: Add more cases to test your component
