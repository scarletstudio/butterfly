import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import { Button } from '../ui'
import { CommunityConfig, CommunityData } from '../../config/communities'
import { UserData } from '../types/UserData'

export interface JoinCommunityProps {
    communityId: string
    communityConfig: CommunityConfig
    authUser: UserData
    // eslint-disable-next-line no-unused-vars
    doJoin(...args: [communityId: string, uid: string]): Promise<{ message: string }>
    doLogIn(): Promise<void>
}

// Error message if no community data found for the given ID
function MissingCommunity({ communityId, communityData }) {
    return (
        !communityData && (
            <>
                <p>
                    No community found for <strong>{communityId}</strong>.
                </p>
                <p>Check your link or ask the person who invited you for help.</p>
            </>
        )
    )
}

// Button to login before joining community, if user is not logged in
function InitialLogIn({ authUser, doLogIn }) {
    return (
        !authUser && (
            <>
                <p>Log in to join this community on Butterfly.</p>
                <Button label="Log in with Google" iconBefore={faGoogle} onClick={doLogIn} />
            </>
        )
    )
}

// Button to change login, if user is logged in but does not want to join the
// community under their current account
function ChangeLogIn({ authUser, doLogIn }) {
    return (
        authUser && (
            <>
                <p>You are currently logged in as {authUser?.displayName}.</p>
                <p>Want to log in with another account?</p>
                <Button label="Log in with Google" iconBefore={faGoogle} onClick={doLogIn} />
            </>
        )
    )
}

// Button to join the community, if user is logged in
function JoinButton({ authUser, handleJoin }) {
    return (
        authUser && (
            <Button
                label="Join Community"
                primary
                iconBefore={faPeopleGroup}
                onClick={handleJoin}
            />
        )
    )
}

// UI to join community, if the community data exists
function JoinCommunityInner({ communityId, communityData, authUser, doJoin, doLogIn }) {
    const [joinRes, setJoinRes] = useState(null)
    const navigateTo = useNavigate()

    const handleJoin = async () => {
        if (!authUser?.uid) {
            setJoinRes({ message: 'You must be logged in to join.' })
            return
        }
        const res = await doJoin(communityId, authUser.uid)
        setJoinRes(res)
        if (res.success) navigateTo('/chats')
    }
    return (
        communityData && (
            <>
                <p>
                    You are invited to join <strong>{communityData.name}</strong>.
                </p>
                <JoinButton {...{ authUser, handleJoin }} />
                {joinRes?.message && <p>{joinRes?.message}</p>}
                <InitialLogIn {...{ authUser, doLogIn }} />
                <ChangeLogIn {...{ authUser, doLogIn }} />
            </>
        )
    )
}

export function JoinCommunity({
    communityId,
    communityConfig,
    authUser,
    doJoin,
    doLogIn,
}: JoinCommunityProps) {
    const communityData: CommunityData = communityConfig?.[communityId]

    return (
        <div className="Layout Page Centered">
            <h1 className="BigTitle">Join Community</h1>
            <JoinCommunityInner {...{ communityId, communityData, authUser, doJoin, doLogIn }} />
            <MissingCommunity {...{ communityId, communityData }} />
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    )
}
