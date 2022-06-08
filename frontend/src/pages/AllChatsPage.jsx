import React from 'react'
import { Link } from 'react-router-dom'

import { useCurrentAuthUser } from '../app/login'
import { COMMUNITY } from '../app/constants'
import { useGetMatches, useGetManyUserData } from '../app/data'
import { MatchTile } from '../app/inbox'

export default function AllChatsPage() {
    const authUser = useCurrentAuthUser()
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
                .map((m) => <MatchTile key={m.id} match={m} users={matchedUsers} />)
        ) : (
            <p>No matches yet.</p>
        )

    return (
        <div className="AllChatsPage">
            <div className="Header">
                <Link to="/">
                    <h1 className="BigTitle">Butterfly Chats</h1>
                </Link>
                <p>Each week, you will be matched to another person in your community.</p>
                <p>Check back on Mondays to see who you are matched with!</p>
            </div>
            <div className="Page">
                <h2>Demo Community</h2>
                {matchEls}
            </div>
        </div>
    )
}
