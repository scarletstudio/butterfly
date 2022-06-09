import React from 'react'
import { useParams } from 'react-router-dom'

import { ChatApp, ChatHeader, ChatConversation, ChatComposer } from '../app/chat'
import { COMMUNITY } from '../app/constants'

export default function ChatPage() {
    const { chatId } = useParams()
    const fullChatId = `${COMMUNITY}/${chatId}`
    return (
        <div className="ChatPage">
            <div className="ChatContainer">
                <ChatApp
                    chatId={fullChatId}
                    header={<ChatHeader />}
                    conversation={<ChatConversation />}
                    composer={<ChatComposer />}
                />
            </div>
        </div>
    )
}
