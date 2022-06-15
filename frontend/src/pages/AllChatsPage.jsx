import React from 'react'
import { Link } from 'react-router-dom'

import { useCurrentAuthUser } from '../app/login'
import { COMMUNITY } from '../app/constants'
import { useGetMatches, useGetManyUserData } from '../app/data'
import { ChatPreview } from '../app/inbox'
import { COMMUNITY_CONFIG } from '../config/communities'

export default function AllChatsPage() {
    const authUser = useCurrentAuthUser()
    const communityConfig = COMMUNITY_CONFIG?.[COMMUNITY] || {}
    const matches = useGetMatches(COMMUNITY, authUser?.uid)
    const matchedUserIds = matches.reduce(
        (agg, m) => ({
            ...agg,
            ...m.participants,
        }),
        {}
    )
    const matchedUsers = useGetManyUserData(matchedUserIds)

    const matchEls =
        matches.length > 0 ? (
            matches
                .sort((a, b) => b.release_timestamp - a.release_timestamp)
                .map((m) => (
                    <ChatPreview
                        key={m.id}
                        match={m}
                        users={matchedUsers}
                        community={communityConfig}
                    />
                ))
        ) : (
            <div className="Page">
                <p>No matches yet.</p>
            </div>
        )

    return (
        <div className="AllChatsPage FullHeight LightBackground">
            <div className="Header Light">
                <h1 className="BigTitle">
                    <Link to="/">
                        <span>Butterfly Chats</span>
                    </Link>
                </h1>
                <p>Each week, you will be matched to another person in your community.</p>
                <p>
                    <span>Check back on Mondays to see who you are matched with! </span>
                    <span>
                        Update <Link to="/me">your profile</Link> for better matches.
                    </span>
                </p>
            </div>
            <div className="Inbox">{matchEls}</div>
        </div>
    )
}
