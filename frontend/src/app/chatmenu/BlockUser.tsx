import React from 'react'
import './BlockUser.css'

import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

import { ChatMenuPageProps } from './ChatMenuPage'
import { UserData } from '../types/UserData'
import { Button, UserTile } from '../ui'
import { fetchFromBackend } from '../utils'

interface BlockUserProps {
    participants: UserData[]
    myUid: string
}

// create user tile to display participants
const CreateUserTile = ({ user, myUid }) => {
    const blockUid = user?.uid

    const doBlock = async () => {
        await fetchFromBackend({
            route: `/chat/block/user/${myUid}/${blockUid}/true`,
            options: { method: 'POST' },
        })
    }

    const doUnblock = async () => {
        await fetchFromBackend({
            route: `/chat/block/user/${myUid}/${blockUid}/false`,
            options: { method: 'POST' },
        })
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
const BlockUserInner = ({ participants, myUid }: BlockUserProps) => {
    return (
        <div className="UserRow">
            {participants.map((user) => (
                <CreateUserTile key={user?.uid} user={user} myUid={myUid} />
            ))}
        </div>
    )
}

// display participants to the chat menu except the logged in user
const BlockUser = ({ chat }: ChatMenuPageProps) => (
    <BlockUserInner
        participants={Object.values(chat?.participants).filter((user) => user?.uid !== chat?.for)}
        myUid={chat?.for}
    />
)

export default BlockUser
