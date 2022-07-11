import React from 'react'
import './BlockUser.css'
import '../ui/User.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock, faUserLock } from '@fortawesome/free-solid-svg-icons'

import { ChatMenuPageProps } from './ChatMenuPage'
import { UserData } from '../types/UserData'

// import { useBackendFetchJson } from '../utils'

interface BlockUserProps {
    // TODO: Fill out the props for your component
    participants: UserData[]
    // userUid: string
}

const UserTile = ({ user }) => {
    const { uid, displayName, photoURL } = user
    const alt = `Profile image for ${displayName}.`

    const doBlock = () => {
        // TODO: Implement blocking the user method
        console.log('User to be blocked', uid)
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
                    <FontAwesomeIcon onClick={doBlock} icon={faUserLock} className="IconBefore" />
                </button>
                <button type="button">
                    <FontAwesomeIcon onClick={doUnblock} icon={faUnlock} className="IconBefore" />
                </button>
            </div>
        </div>
    )
}

const BlockUserInner = ({ participants }: BlockUserProps) => {
    console.log(participants)
    return (
        <div className="UserRow">
            {participants.map((user) => (
                <UserTile key={user?.uid} user={user} />
            ))}
        </div>
    )
}

const BlockUser = ({ chat }: ChatMenuPageProps) => (
    <BlockUserInner
        participants={Object.values(chat?.participants).filter((user) => user?.uid !== chat?.for)}
        // userUid={chat?.for}
    />
)

export default BlockUser

// TODO: (Before Wednesday)
// 1. Move css to BlockUser.css from User.css for the UserTile
// 2. Add comments to the different const functionalities for better understanding
// 3. Implement the onClick methods for block/unblock

// TODO: (After Wednesday)
// 1. Get blocked users for a user to enable/disable block/unblock buttons
