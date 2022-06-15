import React from 'react'

import { MESSAGE_TYPE } from './ChatConstants'
import { UNKNOWN_USER } from '../constants'

import './Message.css'

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
    const isMine = from === myUserId
    const profileImage = (
        <div className="ProfileImage">
            <img src={userAuthor.photoURL} alt={userAuthor.displayName} className="Image" />
        </div>
    )
    return (
        <div className={`Message ${authorClasses[from]}`}>
            {!isMine && profileImage}
            <div className="MessageInner">
                <p className="Author">{userAuthor.displayName}</p>
                <div className="Body">{messageLines}</div>
            </div>
            {isMine && profileImage}
        </div>
    )
}
