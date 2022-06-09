import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle, faBars } from '@fortawesome/free-solid-svg-icons'

import { ChatContext } from './ChatApp'

import { UserTile } from '../ui'
import { formatMatchDate } from '../utils'

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

function ChatAppMenuButton() {
    return (
        <div className="FloatingButton ChatAppMenuButton">
            <span className="FloatingButtonTooltip">Chat Menu</span>
            <FontAwesomeIcon icon={faBars} className="IconBefore" />
        </div>
    )
}

export function ChatHeader() {
    const { chat } = useContext(ChatContext)
    const userEls = Object.values(chat?.participants || {}).map((user) => (
        <UserTile key={user.uid} user={user} />
    ))
    const matchDate = formatMatchDate(chat?.release_timestamp)
    return (
        <>
            <BackToChatsButton />
            <ChatAppMenuButton />
            <h1>Butterfly Chat</h1>
            <p>Messages will disappear after 30 days.</p>
            <p>Your match for the week of {matchDate}.</p>
            <div className="UserRowCentered">{userEls}</div>
        </>
    )
}
