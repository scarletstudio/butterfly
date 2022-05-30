import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

import { ChatApp } from '../common/components/Chat'
import { COMMUNITY } from '../common/utils/constants'

import '../styles/Chats.css'

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
        <div className="Content ChatPage">
            <div className="ChatContainer">
                <BackToChatsButton />
                <ChatApp chatId={fullChatId} />
            </div>
        </div>
    )
}
