import React from 'react'
import './ChatInbox.css'
import ChatPreview from './ChatPreview'
import { ChatData, UserData } from '../types'

interface ChatInboxProps {
    chats: Array<ChatData>
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

    return (
        <div className="Inbox">
            {noChatsEl}
            {sortedChats.map((c) => (
                <ChatPreview key={c.id} match={c} users={users} community={c.communityConfig} />
            ))}
        </div>
    )
}

export default ChatInbox
