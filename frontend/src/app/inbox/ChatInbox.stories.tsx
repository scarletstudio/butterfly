import React from 'react'

import ChatInbox from './ChatInbox'

import { getMockUser } from '../mock'
import { withRouter } from '../testing'

export default {
    title: 'Chat Inbox/ChatInbox',
    component: ChatInbox,
    decorators: [withRouter],
}

const users = {
    asabe: getMockUser('asabe'),
    pradeep: getMockUser('pradeep'),
    quyen: getMockUser('quyen'),
}

const communityConfig = {
    id: 'test',
    name: 'Test Community',
}

const matchOfTwo = {
    id: 'a',
    participants: { asabe: true, pradeep: true },
    for: 'pradeep',
    release_timestamp: 1652400113200, // May 13, 2022
    communityConfig,
}

const matchOfThree = {
    id: 'b',
    participants: { asabe: true, pradeep: true, quyen: true },
    for: 'pradeep',
    release_timestamp: 1658900213507, // June 27, 2022
    communityConfig,
}

const Template = (args) => <ChatInbox {...args} />

export const NoChats = Template.bind({})
NoChats.args = {
    chats: [],
    users: {},
}

export const SomeChats = Template.bind({})
SomeChats.args = {
    chats: [matchOfTwo, matchOfThree],
    users,
}
