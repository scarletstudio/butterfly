import React, { createContext, useMemo } from 'react'

import { useCurrentAuthUser } from '../utils/auth'
import { useGetChatData, useGetMessages, sendMessage } from '../utils/chat'
import { MESSAGE_TYPE, UNKNOWN_USER } from '../utils/constants'
import { Error } from './Errors'

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

export const ChatContext = createContext()

export function ChatApp({ chatId, header, conversation, composer }) {
    const authUser = useCurrentAuthUser()
    const myUserId = authUser?.uid
    const chat = useGetChatData(`${chatId}~${myUserId}`)
    const messages = useGetMessages(chatId)

    const displayError = getChatDisplayError(chatId, chat, myUserId)
    const isReady = chat.isLoaded && !displayError

    const sendChatMessage = (message) => {
        if (!myUserId || !message) return
        sendMessage(chatId, {
            message,
            from: myUserId,
        })
    }

    const chatMemo = useMemo(() => ({
        chat,
        messages,
        myUserId,
        sendChatMessage,
    }))

    const chatAppEl = (
        <ChatContext.Provider value={chatMemo}>
            <div className="ChatAppInner HideScroll">
                <div className="ChatHeader">{header}</div>
                <div className="ChatMessages">{conversation}</div>
                <div className="ChatComposer">{composer}</div>
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
