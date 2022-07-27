import React from 'react'

import ChatInbox from './ChatInbox'

export default {
    title: 'Chat Inbox/ChatInbox',
    component: ChatInbox,
}

const Template = (args) => <ChatInbox {...args} />

export const Case1 = Template.bind({})
Case1.args = {}
