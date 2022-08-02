import React from 'react'

import ChatPreview from './ChatPreview'

import { getMockUser } from '../mock'
import { withRouter } from '../testing'

export default {
    title: 'Chat Inbox/ChatPreview',
    component: ChatPreview,
    decorators: [withRouter],
}

const users = {
    asabe: getMockUser('asabe'),
    pradeep: getMockUser('pradeep'),
    quyen: getMockUser('quyen'),
}

const community = {
    id: 'test',
    name: 'Test Community',
}

const matchOfTwo = {
    id: 'a',
    participants: { asabe: true, pradeep: true },
    for: 'pradeep',
    release_timestamp: 1652400113200, // May 13, 2022
}

const matchOfThree = {
    id: 'b',
    participants: { asabe: true, pradeep: true, quyen: true },
    for: 'pradeep',
    release_timestamp: 1658900213507, // June 27, 2022
}

const Template = (args) => <ChatPreview {...args} />

export const ChatWithTwoUsers = Template.bind({})
ChatWithTwoUsers.args = {
    match: matchOfTwo,
    users,
    community,
}

export const ChatWithThreeUsers = Template.bind({})
ChatWithThreeUsers.args = {
    match: matchOfThree,
    users,
    community,
}
