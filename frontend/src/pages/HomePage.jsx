import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/HomePage.css'

export default function HomePage() {
    return (
        <div className="Page Content HomePage VerticalCenter">
            <div>
                <h1 className="BigTitle">Butterfly</h1>
                <p>Meet people in your community.</p>
                <Link to="/login" className="Button Primary">
                    Login
                </Link>
            </div>
        </div>
    )
}
