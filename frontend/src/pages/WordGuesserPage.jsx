import React from 'react'
import { Link } from 'react-router-dom'

import { WordGuesserApp } from '../app/games/wordguesser'
import { useCurrentAuthUser } from '../app/login'

export default function WordGuesserPage() {
    const authUser = useCurrentAuthUser()
    const loginLink = (
        <p>
            Please <Link to="/login">login</Link> to play.
        </p>
    )

    return (
        <div className="Layout WordGuesserPage Centered">
            {!authUser && loginLink}
            <WordGuesserApp gameId="default" />
            <Link to="/chats">Back to Chats</Link>
        </div>
    )
}
