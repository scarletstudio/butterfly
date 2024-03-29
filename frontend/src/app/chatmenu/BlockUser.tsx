import React, { useEffect, useState } from 'react'
import './BlockUser.css'

import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

import { ChatMenuPageProps } from './ChatMenuPage'
import { UserData } from '../types/UserData'
import { Button, UserTile } from '../ui'
import { fetchFromBackend } from '../utils'
import { useFetchBlockedUsers } from '../data'

interface BlockUserProps {
    participants: UserData[]
    myUid: string
}

async function updateBlock(myUid: string, blockUid: string, shouldBlock: boolean) {
    await fetchFromBackend({
        route: `/chat/block/user/${myUid}/${blockUid}/${shouldBlock}`,
        options: { method: 'POST' },
    })
}

// create user tile to display participants
const BlockUserTile = ({ user, value, submitBlock }) => {
    const blockUid = user?.uid
    const [blocked, setIsBlocked] = useState(value)

    const blockHandler = () => {
        submitBlock(blockUid, !blocked)
        setIsBlocked(!blocked)
    }
    useEffect(() => {
        setIsBlocked(value)
    }, [value])

    return (
        <div className={blocked ? 'BlockedUser' : ''}>
            <UserTile user={user} />
            <Button
                label={blocked ? 'Unblock' : 'Block'}
                iconBefore={blocked ? faLockOpen : faLock}
                primary
                onClick={blockHandler}
            />
        </div>
    )
}

// show the users within the chat
const BlockUserInner = ({ participants, myUid }: BlockUserProps) => {
    const blockedUsers = useFetchBlockedUsers(myUid)
    const submitBlock = (blockUid: string, shouldBlock: boolean) =>
        updateBlock(myUid, blockUid, shouldBlock)

    return (
        <div className="UserRow">
            {participants.map((participant) => (
                <BlockUserTile
                    key={participant?.uid}
                    user={participant}
                    value={blockedUsers[participant?.uid] || false}
                    submitBlock={submitBlock}
                />
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
