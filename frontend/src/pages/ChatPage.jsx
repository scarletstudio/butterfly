import React from 'react'
import { useParams } from 'react-router-dom'

import { ChatApp, ChatHeader, ChatConversation, ChatComposer } from '../app/chat'
import { COMMUNITY } from '../app/constants'

const MENU_CONFIG = {
    options: [
        { id: 'search', name: 'Search Messages' },
        { id: 'block', name: 'Block Users' },
        { id: 'rate', name: 'Rate Match' },
    ],
}

export default function ChatPage() {
    const { chatId } = useParams()
    const fullChatId = `${COMMUNITY}/${chatId}`
    return (
        <div className="ChatPage">
            <div className="ChatContainer">
                <ChatApp
                    chatId={fullChatId}
                    header={<ChatHeader menuConfig={MENU_CONFIG} />}
                    conversation={<ChatConversation />}
                    composer={<ChatComposer />}
                />
            </div>
        </div>
    )
}
