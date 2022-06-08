import React, { useContext } from 'react'

import { ChatContext, Message } from './ChatApp'
import { getConversationStarterForChat } from '../starters'

export function ChatConversation() {
    const { chat, messages, myUserId } = useContext(ChatContext)

    const ConversationStarter = getConversationStarterForChat(chat)
    const converstationStarterEl = ConversationStarter && (
        <div key="conversation_starter">
            <ConversationStarter chat={chat} />
        </div>
    )
    const loadingEl = <p>Loading chat...</p>
    const defaultConversationStarter = <p>No messages yet, will you start things off?</p>
    const messageEls =
        chat.isLoaded &&
        messages.map((m) => (
            <Message key={m.key} data={m} myUserId={myUserId} participants={chat.participants} />
        ))

    if (!chat.isLoaded) {
        return loadingEl
    }

    if (converstationStarterEl) {
        return [converstationStarterEl, ...messageEls]
    }

    if (messages.length > 0) {
        return messageEls
    }

    return defaultConversationStarter
}
