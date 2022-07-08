import React from 'react'
import { Link } from 'react-router-dom'

import { formatShortDate } from '../utils'
import { UserDisc } from '../ui'
import { getChatTitle } from '../chat/ChatHeader'

import './ChatPreview.css'

export function ChatPreview({ match, users, community }) {
    // eslint-disable-next-line camelcase
    const { id, release_timestamp, participants } = match

    const matchedUsers = Object.keys(participants)
        .filter((uid) => uid !== match.for)
        .map((uid) => users?.[uid] || { uid })
    const chatTitle = getChatTitle(matchedUsers)
    const userDiscs = matchedUsers.map((u) => <UserDisc key={u.uid} user={u} />)
    const userClass = matchedUsers.length === 1 ? 'Single' : 'Group'

    return (
        <Link to={`/chats/${community?.id}/${id}`} className="NoDecorate">
            <div className="ChatPreview">
                <div className={`UserPreview ${userClass}`}>{userDiscs}</div>
                <div className="MessagePreview">
                    <h3>{chatTitle}</h3>
                    <p>{community?.name}</p>
                </div>
                <div className="ReleasePreview">
                    <p>{formatShortDate(release_timestamp)}</p>
                </div>
            </div>
        </Link>
    )
}
