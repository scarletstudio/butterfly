import React from 'react'

import { ChatAppInner } from './ChatApp'
import { ChatHeader } from './ChatHeader'
import { ChatComposer } from './ChatComposer'
import { ChatConversation } from './ChatConversation'
import { withChatContainer, withChatContext } from './Decorators'
import { getMockUser } from '../mock'
import { withRouter } from '../testing'

export default {
    title: 'Chat App/ChatAppInner',
    component: ChatAppInner,
    decorators: [withRouter, withChatContainer],
    parameters: {
        layout: 'fullscreen',
    },
}

const Template = (args) => <ChatAppInner {...args} />

const chatAppProps = {
    chatId: 'demo/2022-04-10~mHythOvM',
    header: <ChatHeader />,
    conversation: <ChatConversation />,
    composer: <ChatComposer />,
}
const baseChatData = {
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
}
const conversationStarterData = {
    metadata: {
        generator: 'commonLettersGenerator',
        commonLetters: ['a', 'e'],
    },
}
const shortMessagesData = [
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
const longMessagesData = [
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
    {
        from: 'pradeep',
        type: 'MESSAGE',
        timestamp: 2,
        message:
            'Let me tell you a story about how I got to meet a really cute cat that wanted me to scratch it behind the ears but then a dog appeared to play in the park and so I gave both of them scratches behind the ears and even boops on their snoots but then the cat got sleepy and took a nap under a tree but the doggo wanted to chase a squirrel on the same tree leading to chaos.',
    },
    {
        from: 'asabe',
        type: 'MESSAGE',
        timestamp: 3,
        message: 'Greatest story ever lmao',
    },
]
const chatMenuConfig = {
    options: [
        { id: 'a', name: 'Feature A', component: () => <p>Feature A</p> },
        { id: 'b', name: 'Feature B', component: () => <p>Feature B</p> },
        { id: 'c', name: 'Feature C', component: () => <p>Feature C</p> },
        { id: 'd', name: 'Feature D', component: () => <p>Feature D</p> },
        { id: 'e', name: 'Feature E', component: () => <p>Feature E</p> },
    ],
}

export const EmptyChat = Template.bind({})
EmptyChat.args = { ...chatAppProps }
EmptyChat.decorators = [withChatContext({ ...baseChatData })]

// Default conversation starter disappears once messages are sent
export const ChatWithMessages = Template.bind({})
ChatWithMessages.args = { ...chatAppProps }
ChatWithMessages.decorators = [
    withChatContext({
        ...baseChatData,
        messages: [...shortMessagesData],
    }),
]

// Conversation should scroll, but header and composer should stay fixed
export const ChatWithScrollableMessages = Template.bind({})
ChatWithScrollableMessages.args = { ...chatAppProps }
ChatWithScrollableMessages.decorators = [
    withChatContext({
        ...baseChatData,
        messages: [...longMessagesData],
    }),
]

export const ChatWithStarter = Template.bind({})
ChatWithStarter.args = { ...chatAppProps }
ChatWithStarter.decorators = [
    withChatContext({
        ...baseChatData,
        chat: {
            ...baseChatData.chat,
            ...conversationStarterData,
        },
    }),
]

// Custom conversation starter remains once messages are sent
export const ChatWithStarterAndMessages = Template.bind({})
ChatWithStarterAndMessages.args = { ...chatAppProps }
ChatWithStarterAndMessages.decorators = [
    withChatContext({
        ...baseChatData,
        chat: {
            ...baseChatData.chat,
            ...conversationStarterData,
        },
        messages: [...shortMessagesData],
    }),
]

export const ChatWithMenu = Template.bind({})
ChatWithMenu.args = {
    ...chatAppProps,
    header: <ChatHeader menuConfig={chatMenuConfig} />,
}
ChatWithMenu.decorators = [
    withChatContext({
        ...baseChatData,
        messages: [
            {
                from: 'asabe',
                type: 'MESSAGE',
                timestamp: 0,
                message: 'Click the menu button on the top right to check it out!',
            },
        ],
    }),
]
