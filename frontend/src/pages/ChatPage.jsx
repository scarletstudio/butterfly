import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

import { ChatApp, ChatHeader, ChatConversation, ChatComposer } from '../lib/chat'
import { COMMUNITY } from '../lib/constants'

function BackToChatsButton() {
    return (
        <div className="FloatingButton BackToChatsButton">
            <Link to="/chats" className="NoDecorate">
                <FontAwesomeIcon icon={faXmarkCircle} className="IconBefore" />
                <span className="FloatingButtonTooltip">Back to Chats</span>
            </Link>
        </div>
    )
}

export default function ChatPage() {
    const { chatId } = useParams()
    const fullChatId = `${COMMUNITY}/${chatId}`
    return (
        <div className="ChatPage">
            <div className="ChatContainer">
                <BackToChatsButton />
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
