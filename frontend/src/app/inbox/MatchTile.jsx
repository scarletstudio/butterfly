import React from 'react'
import { Link } from 'react-router-dom'
import { faComments } from '@fortawesome/free-solid-svg-icons'

import { formatMatchDate } from '../utils'
import { Button, UserTile } from '../ui'

import './Matches.css'

export function MatchTile({ match, users }) {
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
                <Link to={`/chats/${id}`}>
                    <Button label="Open Chat" iconBefore={faComments} />
                </Link>
            </p>
        </div>
    )
}
