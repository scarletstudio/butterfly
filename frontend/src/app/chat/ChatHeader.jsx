import React, { useContext } from 'react'

import { ChatContext } from './ChatApp'

import { UserTile } from '../ui'
import { formatMatchDate } from '../utils'

export function ChatHeader() {
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
