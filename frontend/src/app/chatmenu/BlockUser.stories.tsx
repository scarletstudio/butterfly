import React from 'react'

import BlockUser from './BlockUser'
import { getMockUser } from '../mock'

export default {
    title: 'Chat Menu Pages/BlockUser',
    component: BlockUser,
}

const Template = (args) => <BlockUser {...args} />

// two user chat
const twoChatData = {
    chat: {
        for: 'pradeep',
        participants: {
            quyen: getMockUser('quyen'),
            pradeep: getMockUser('pradeep'),
        },
    },
}

// three user chat
const threeChatData = {
    chat: {
        for: 'pradeep',
        participants: {
            si_woo: getMockUser('si_woo'),
            quyen: getMockUser('quyen'),
            pradeep: getMockUser('pradeep'),
        },
    },
}

// TODO: add in block and unblock case

export const twoUsers = Template.bind({})
twoUsers.args = { ...twoChatData }

export const threeUsers = Template.bind({})
threeUsers.args = { ...threeChatData }

// TODO: Add more cases to test your component
