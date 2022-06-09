import React, { createContext, useMemo, useContext } from 'react'

import { useCurrentAuthUser } from '../login'
import { useGetChatData, useGetMessages, sendMessage } from './ChatHooks'
import { MESSAGE_TYPE } from './ChatConstants'
import { UNKNOWN_USER } from '../constants'
import { Error } from '../ui'

import './Chat.css'

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

export function ChatAppInner({ chatId, header, conversation, composer }) {
    const { chat, myUserId } = useContext(ChatContext)
    const displayError = getChatDisplayError(chatId, chat, myUserId)
    const isReady = chat.isLoaded && !displayError
    const chatAppEl = (
        <div className="ChatAppInner HideScroll">
            <div className="ChatHeader HideScroll">{header}</div>
            <div className="ChatMessages">{conversation}</div>
            <div className="ChatComposer">{composer}</div>
        </div>
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

export function ChatApp({ chatId, header, conversation, composer }) {
    const authUser = useCurrentAuthUser()
    const myUserId = authUser?.uid
    const chat = useGetChatData(`${chatId}~${myUserId}`)
    const messages = useGetMessages(chatId)

    const sendChatMessage = (message) => {
        if (!myUserId || !message) return
        sendMessage(chatId, {
            message,
            from: myUserId,
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const chatMemo = useMemo(() => ({
        chat,
        messages,
        myUserId,
        sendChatMessage,
    }))

    return (
        <ChatContext.Provider value={chatMemo}>
            <ChatAppInner
                chatId={chatId}
                header={header}
                conversation={conversation}
                composer={composer}
            />
        </ChatContext.Provider>
    )
}
