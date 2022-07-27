import React from 'react'
import './ChatInbox.css'
import ChatPreview from './ChatPreview'
import { ChatData, UserData } from '../types'

interface ChatInboxProps {
    chats: Array<ChatData>
    users: { [uid: string]: UserData }
}

const ChatInbox = ({ chats, users }: ChatInboxProps) => {
    const sortedChats = chats.sort((a, b) => b.release_timestamp - a.release_timestamp)
    const noChatsEl = sortedChats.length === 0 && (
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
