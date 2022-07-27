import React from 'react'
import { Link } from 'react-router-dom'

import { useCurrentAuthUser } from '../app/login'
import { getUserData, useGetManyUserData, useGetAllUserMatches } from '../app/data'
import { ChatInbox } from '../app/inbox'

export default function AllChatsPage() {
    const authUser = useCurrentAuthUser()
    const matches = useGetAllUserMatches(authUser?.uid)
    const matchedUserIds = matches.reduce(
        (agg, m) => ({
            ...agg,
            ...m.participants,
        }),
        {}
    )
    const matchedUsers = useGetManyUserData(matchedUserIds, getUserData)

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
            <ChatInbox chats={matches} users={matchedUsers} />
        </div>
    )
}
