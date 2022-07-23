import React, { createContext, useMemo, useContext } from 'react'

import { useCurrentAuthUser } from '../login'
import { useGetChatData, useGetMessages, sendMessage } from './ChatHooks'
import { Error } from '../ui'

import './Chat.css'

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
    const fullChatId = chatId && myUserId && `${chatId}~${myUserId}`
    const chat = useGetChatData(fullChatId)
    const messages = useGetMessages(chatId)

    const sendChatMessage = (raw) => {
        const message = raw?.trim()
        if (!myUserId || !message) return
        sendMessage(chatId, {
            // Data actually needed to send the message
            message,
            from: myUserId,
            // Additional data forlogging analytics
            community: chat?.communityId,
            release: chat?.release_tag,
            chat: chatId,
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
