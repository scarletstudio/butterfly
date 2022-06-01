import React, { createRef, createContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { useCurrentAuthUser } from '../utils/auth'
import { useGetChatData, useGetMessages, sendMessage } from '../utils/chat'
import { MESSAGE_TYPE, UNKNOWN_USER } from '../utils/constants'
import { Error } from './Errors'

export const ChatContext = createContext()

function getAuthorClasses(participants, myUserId) {
    return Object.keys(participants)
        .filter((uid) => uid !== myUserId)
        .sort()
        .reduce(
            (agg, uid, i) => ({
                ...agg,
                [uid]: `Theirs Participant${i}`,
            }),
            { [myUserId]: 'Mine' }
        )
}

export function Message({ data, myUserId, participants }) {
    const { message, from, type } = data
    // Apply different styles for each participant
    const authorClasses = getAuthorClasses(participants, myUserId)
    // Only render messages
    if (type !== MESSAGE_TYPE) return null
    const userAuthor = participants?.[from] || UNKNOWN_USER
    // Retain newlines from the message
    // eslint-disable-next-line react/no-array-index-key
    const messageLines = message.split('\n').map((line, i) => <p key={i}>{line}</p>)
    return (
        <div className={`Message ${authorClasses[from]}`}>
            <div className="MessageInner">
                <p className="Author">{userAuthor.displayName}</p>
                <div className="Body">{messageLines}</div>
            </div>
        </div>
    )
}

function ChatMessages({ chatId, chat, myUserId }) {
    const messages = useGetMessages(chatId)
    const isLoaded = chat.isLoaded && messages.length > 0

    const messageEls =
        isLoaded &&
        messages.map((m) => (
            <Message key={m.key} data={m} myUserId={myUserId} participants={chat.participants} />
        ))

    const loadingEl = <p>No messages yet... Will you start things off?</p>

    return <div className="ChatMessages">{isLoaded ? messageEls : loadingEl}</div>
}

function ChatComposer({ chatId, myUserId }) {
    const textRef = createRef()

    const doSend = () => {
        const message = textRef.current.value
        if (!myUserId || !message) return
        sendMessage(chatId, {
            message,
            from: myUserId,
        })
        textRef.current.value = ''
    }

    return (
        <div className="ChatComposer">
            <textarea ref={textRef} className="Input" />
            <button type="button" onClick={doSend} className="Button Send">
                <FontAwesomeIcon icon={faArrowRight} className="IconBefore" />
            </button>
        </div>
    )
}

function ChatHeaderWrapper({ header }) {
    return <div className="ChatHeader">{header}</div>
}

function ChatLoading() {
    return <p className="Centered">Loading chat...</p>
}

function getChatDisplayError(chatId, chat, myUserId) {
    const participants = chat?.participants || {}
    if (!chat.isLoaded) {
        return null
    }
    if (!chat?.exists) {
        return `No chat found for ID: ${chatId}`
    }
    if (!(myUserId in participants)) {
        return 'You are not a participant in this chat.'
    }
    return null
}

export function ChatApp({ chatId, header }) {
    const authUser = useCurrentAuthUser()
    const myUserId = authUser?.uid
    const chat = useGetChatData(`${chatId}~${myUserId}`)

    const displayError = getChatDisplayError(chatId, chat, myUserId)
    const isReady = chat.isLoaded && !displayError

    const chatAppEl = (
        <ChatContext.Provider value={chat}>
            <div className="ChatAppInner HideScroll">
                <ChatHeaderWrapper header={header} />
                <ChatMessages chatId={chatId} myUserId={myUserId} chat={chat} />
                <ChatComposer chatId={chatId} myUserId={myUserId} />
            </div>
        </ChatContext.Provider>
    )

    return (
        <div className="ChatApp">
            {!chat.isLoaded && <ChatLoading />}
            {isReady && chatAppEl}
            <Error hasError={displayError}>
                <h1>No Chat Here...</h1>
                <pre>{displayError}</pre>
            </Error>
        </div>
    )
}
