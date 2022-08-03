import React, { useEffect, useState } from 'react'
import './BlockUser.css'

import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

import { ChatMenuPageProps } from './ChatMenuPage'
import { UserData } from '../types/UserData'
import { Button, UserTile } from '../ui'
import { fetchFromBackend, useBackendFetchJson } from '../utils'

interface BlockUserProps {
    participants: UserData[]
    myUid: string
}

function useFetchBlockedUsers(myUid: string) {
    const [res] = useBackendFetchJson({
        route: `/chat/block/user/${myUid}`,
        deps: [myUid],
        isValid: myUid,
    })
    const blockedUsers = res?.blocks || []
    // create a blocked user dictionary
    return blockedUsers.reduce(
        (agg, user: { uid: string; blocked: boolean }) => ({
            ...agg,
            [user.uid]: user.blocked,
        }),
        {}
    )
}

async function updateBlock(blockUid: string, shouldBlock: boolean) {
    await fetchFromBackend({
        route: `/chat/block/user/${this?.BlockUserProps?.myUid}/${blockUid}/${shouldBlock}`,
        options: { method: 'POST' },
    })
}

// create user tile to display participants
const CreateUserTile = ({ user, value }) => {
    const blockUid = user?.uid
    const [blocked, setIsBlocked] = useState(value)

    const blockHandler = () => {
        const newValue = !value
        updateBlock(blockUid, newValue)
        setIsBlocked(newValue)
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

    return (
        <div className="UserRow">
            {participants.map((participant) => (
                <CreateUserTile
                    key={participant?.uid}
                    user={participant}
                    value={blockedUsers[participant?.uid] || false}
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
