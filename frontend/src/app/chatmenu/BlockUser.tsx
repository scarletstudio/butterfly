import React from 'react'
import './BlockUser.css'

import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

import { ChatMenuPageProps } from './ChatMenuPage'
import { UserData } from '../types/UserData'
import { Button, UserTile } from '../ui'

interface BlockUserProps {
    participants: UserData[]
}

// create user tile to display participants
const CreateUserTile = ({ user }) => {
    const doBlock = () => {
        // TODO: Implement blocking the user method
    }

    const doUnblock = () => {
        // TODO: Implement unblocking the user method
    }

    return (
        <>
            <UserTile user={user} />
            <Button label="Block" iconBefore={faLock} primary onClick={doBlock} />
            <Button label="Unblock" iconBefore={faLockOpen} primary={false} onClick={doUnblock} />
        </>
    )
}

// show the users within the chat
const BlockUserInner = ({ participants }: BlockUserProps) => {
    return (
        <div className="UserRow">
            {participants.map((user) => (
                <CreateUserTile key={user?.uid} user={user} />
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
