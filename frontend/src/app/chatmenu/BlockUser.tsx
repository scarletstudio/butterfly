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
// create user tile to display participants
const UserTile = ({ user }) => {
    const { uid, displayName, photoURL } = user
    const alt = `Profile image for ${displayName}.`

    const doBlock = () => {
        // TODO: Implement blocking the user method
        // route: `/chat/block/user/${uid}/${blockUser}/true`,
        // method: 'POST',
        console.log('User to be blocked', uid)
    }

    const doUnblock = () => {
        // TODO: Implement unblocking the user method
        // route: `/chat/block/user/${uid}/${blockUser}/false`,
        // method: 'POST',
        console.log('User is unblocked', uid)
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

// show the users within the chat
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

// display participants to the chat menu except the logged in user
const BlockUser = ({ chat }: ChatMenuPageProps) => (
    <BlockUserInner
        participants={Object.values(chat?.participants).filter((user) => user?.uid !== chat?.for)}
        // userUid={chat?.for}
    />
)

export default BlockUser

// TODO:
// 1. Implement the onClick methods for block/unblock
// 2. Get blocked users for a user to display user status (Need to use state)
// 3. Updating the button to enabled/disabled based on the user status
// 4. Add storybook stories to test out our case scenarios
