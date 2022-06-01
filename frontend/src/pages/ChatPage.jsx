import React, { createRef, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

import { ChatApp, ChatContext, Message } from '../common/components/Chat'
import { UserTile } from '../common/components/User'
import { COMMUNITY } from '../common/utils/constants'
import { formatMatchDate } from '../common/utils/datetime'

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

function ChatHeader() {
    const { chat } = useContext(ChatContext)
    const userEls = Object.values(chat?.participants || {}).map((user) => (
        <UserTile key={user.uid} user={user} />
    ))
    const matchDate = formatMatchDate(chat?.release_timestamp)
    return (
        <>
            <h1>Butterfly Chat</h1>
            <p>Messages will disappear after 30 days.</p>
            <p>Your match for the week of {matchDate}.</p>
            <div className="UserRowCentered">{userEls}</div>
        </>
    )
}

function ChatConversation() {
    const { chat, messages, myUserId } = useContext(ChatContext)

    const isLoaded = chat.isLoaded && messages.length > 0
    const messageEls =
        isLoaded &&
        messages.map((m) => (
            <Message key={m.key} data={m} myUserId={myUserId} participants={chat.participants} />
        ))
    const loadingEl = <p>No messages yet... Will you start things off?</p>

    return isLoaded ? messageEls : loadingEl
}

function ChatComposer() {
    const textRef = createRef()
    const { sendChatMessage } = useContext(ChatContext)

    const doSend = () => {
        sendChatMessage(textRef.current.value)
        textRef.current.value = ''
    }

    return (
        <>
            <textarea ref={textRef} className="Input" />
            <button type="button" onClick={doSend} className="Button Send">
                <FontAwesomeIcon icon={faArrowRight} className="IconBefore" />
            </button>
        </>
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
