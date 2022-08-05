import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckDouble, faCircleCheck, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useCurrentAuthUser } from '../login'
import { formatShortDate } from '../utils'
import { UserDisc } from '../ui'

import './ChatPreview.css'
import { ChatData } from '../types'

// TODO(vinesh): Having some problem (in Storybook only) trying to import this
// function from chat/ChatHeader.jsx, so just copied it here for now.
export function getChatTitle(otherUsers) {
    const [a, b] = otherUsers
    const [aName, bName] = [a?.displayName, b?.displayName]
    if (aName && bName) return `${aName} and ${bName}`
    return aName || ''
}

export default function ChatPreview({ match, users, community, chatData }) {
    // eslint-disable-next-line camelcase
    const { id, release_timestamp, participants } = match

    const matchedUsers = Object.keys(participants)
        .filter((uid) => uid !== match.for)
        .map((uid) => users?.[uid] || { uid })
    const chatTitle = getChatTitle(matchedUsers)
    const userDiscs = matchedUsers.map((u) => <UserDisc key={u.uid} user={u} />)
    const userClass = matchedUsers.length === 1 ? 'Single' : 'Group'
    const authUser = useCurrentAuthUser()
    const currentChat: ChatData = chatData

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
                    <div>
                        {authUser?.uid === currentChat.latestMessage?.from ? (
                            <FontAwesomeIcon icon={faCircleCheck} className="readIcon" />
                        ) : (
                            <div className="readIcon">
                                <FontAwesomeIcon icon={faMoon} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}
