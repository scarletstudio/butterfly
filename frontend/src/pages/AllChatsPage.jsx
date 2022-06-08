import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

import { useCurrentAuthUser } from '../lib/login'
import { COMMUNITY } from '../lib/constants'
import { formatMatchDate } from '../lib/utils'
import { useGetMatches, useGetManyUserData } from '../lib/data'
import { UserTile } from '../lib/ui'

import '../lib/inbox/Matches.css'

function MatchTile({ match, users }) {
    // eslint-disable-next-line camelcase
    const { id, release_timestamp, participants } = match

    const userEls = Object.keys(participants)
        .filter((uid) => uid !== match.for)
        .map((uid) => users?.[uid] || { uid })
        .map((u) => <UserTile key={u.uid} user={u} />)

    return (
        <div className="MatchTile Card Full">
            <h3>Week of {formatMatchDate(release_timestamp)}</h3>
            <div className="UserRow">{userEls}</div>
            <p>
                <Link to={`/chats/${id}`} className="Button">
                    <FontAwesomeIcon icon={faComments} className="IconBefore" />
                    <span>Open Chat</span>
                </Link>
            </p>
        </div>
    )
}

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
