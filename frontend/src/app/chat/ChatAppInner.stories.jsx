import React from 'react'

import { ChatAppInner } from './ChatApp'
import { ChatHeader } from './ChatHeader'
import { ChatComposer } from './ChatComposer'
import { ChatConversation } from './ChatConversation'
import { withChatContainer, withChatContext } from './Decorators'
import { getMockUser } from '../mock'

export default {
    title: 'Chat App/ChatAppInner',
    component: ChatAppInner,
    decorators: [withChatContainer],
    parameters: {
        layout: 'fullscreen',
    },
}

const Template = (args) => <ChatAppInner {...args} />

export const Main = Template.bind({})
Main.args = {
    chatId: 'demo/2022-04-10~mHythOvM',
    header: <ChatHeader />,
    conversation: <ChatConversation />,
    composer: <ChatComposer />,
}
Main.decorators = [
    withChatContext({
        myUserId: 'asabe',
        chat: {
            isLoaded: true,
            exists: true,
            release_timestamp: new Date('2022-04-10').getTime(),
            participants: {
                asabe: getMockUser('asabe'),
                pradeep: getMockUser('pradeep'),
            },
        },
        messages: [],
    }),
]
