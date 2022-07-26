import React from 'react'
import './BlockUser.css'
import '../ui/User.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock, faUserLock } from '@fortawesome/free-solid-svg-icons'

import { ChatMenuPageProps } from './ChatMenuPage'
import { UserData } from '../types/UserData'

interface BlockUserProps {
    participants: UserData[]
}

// create user tile to display participants
const UserTile = ({ user }) => {
    const { uid, displayName, photoURL } = user
    const alt = `Profile image for ${displayName}.`

    const doBlock = () => {
        // TODO: Implement blocking the user method
    }

    const doUnblock = () => {
        // TODO: Implement unblocking the user method
    }

    return (
        <div className="UserTile">
            <div className="ProfileImage">
                <img src={photoURL} alt={alt} className="Image" />
            </div>
            <div className="DisplayName">
                <span>{displayName}</span>
            </div>
            <div>
                <button type="button">
                    <FontAwesomeIcon
                        onClick={doBlock}
                        icon={faUserLock}
                        className="IconBeforeBlock"
                    />
                    Block
                </button>
                <button type="button">
                    <FontAwesomeIcon
                        onClick={doUnblock}
                        icon={faUnlock}
                        className="IconBeforeUnblock"
                    />
                    Unblock
                </button>
            </div>
        </div>
    )
}

// show the users within the chat
const BlockUserInner = ({ participants }: BlockUserProps) => {
    return (
        <div className="UserRow">
            {participants.map((user) => (
                <UserTile key={user?.uid} user={user} />
            ))}
        </div>
    )
}

// display participants to the chat menu except the logged in user
const BlockUser = ({ chat }: ChatMenuPageProps) => (
    <BlockUserInner
        participants={Object.values(chat?.participants).filter((user) => user?.uid !== chat?.for)}
    />
)

export default BlockUser
