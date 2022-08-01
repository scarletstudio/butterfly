import React from 'react'
import './ChatInbox.css'
import ChatPreview from './ChatPreview'
import { ChatData, UserData } from '../types'
import { fetchFromBackend, useBackendFetchJson } from '../utils'

interface ChatInboxProps {
    chats: ChatData[]
    users: { [uid: string]: UserData }
}

const ChatInbox = ({ chats, users }: ChatInboxProps) => {
    const mostRecentFirst = (a, b) => b.release_timestamp - a.release_timestamp
    const sortedChats = chats.sort(mostRecentFirst)

    const noChatsEl = chats.length === 0 && (
        <div className="Page">
            <p>No matches yet.</p>
        </div>
    )
    const chatEls =
        sortedChats.length > 0 &&
        sortedChats.map((c) => {
            const com = c?.communityConfig || {}
            return <ChatPreview key={c.id} match={c} users={users} community={com} />
        })
    // TODO: hide blocked users chat

    return (
        <div className="ChatInbox">
            {noChatsEl}
            {chatEls}
            <div className="BlockInbox">block users here</div>
        </div>
    )
}

export default ChatInbox
