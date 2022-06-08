import React from 'react'

import { ChatContext } from './ChatApp'

export const withChatContainer = (Story) => (
    <div className="ChatPage">
        <div className="ChatContainer">
            <Story />
        </div>
    </div>
)

export const withChatContext = (chatData) => {
    const withChatContextProvider = (Story) => (
        <ChatContext.Provider value={chatData}>
            <Story />
        </ChatContext.Provider>
    )
    return withChatContextProvider
}
