import React, { useState } from 'react'
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

// find the blocked accounts of the user
function FetchBlockedUsers(myUid: string, blockUid: string) {
    const [res] = useBackendFetchJson({
        route: `/chat/block/user/${myUid}`,
        deps: [myUid],
        isValid: myUid,
    })
    const blockedUsers = res?.blocks || []

    return blockedUsers.find((user: { uid: string }) => user?.uid === blockUid)?.blocked || false
}

// create user tile to display participants
const CreateUserTile = ({ user, myUid }) => {
    const blockUid = user?.uid
    // create a useState for updating blocked status
    const [isActive, setActive] = useState(FetchBlockedUsers(myUid, blockUid))
    // method for blocking
    const doBlock = async () => {
        await fetchFromBackend({
            route: `/chat/block/user/${myUid}/${blockUid}/true`,
            options: { method: 'POST' },
        })
    }
    // method for unblocking
    const doUnblock = async () => {
        await fetchFromBackend({
            route: `/chat/block/user/${myUid}/${blockUid}/false`,
            options: { method: 'POST' },
        })
    }

    return (
        <div className={isActive ? 'BlockedUser' : ''}>
            <div className="Tile">
                <UserTile user={user} />
                <div className="Buttons">
                    <Button
                        label="Block"
                        iconBefore={faLock}
                        primary
                        onClick={() => {
                            doBlock()
                            setActive(true)
                        }}
                    />
                    <Button
                        label="Unblock"
                        iconBefore={faLockOpen}
                        primary={false}
                        onClick={() => {
                            doUnblock()
                            setActive(false)
                        }}
                    />
                </div>
            </div>
        </div>
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
