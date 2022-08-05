import React from 'react'
import { Link } from 'react-router-dom'

import { WordGuesserApp } from '../app/games/wordguesser'

export default function WordGuesserPage() {
    return (
        <div className="Layout Page Centered">
            <WordGuesserApp gameId="default" />
            <Link to="/">Back to Home</Link>
        </div>
    )
}
