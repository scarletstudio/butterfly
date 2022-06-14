import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Logo } from '../app/ui'

import '../app/styles/HomePage.css'

export default function HomePage() {
    return (
        <div className="Layout Page HomePage FullHeight VerticalCenter">
            <div>
                <Logo size="Big" align="Centered" />
                <h1 className="BigTitle">Butterfly</h1>
                <p>Meet people in your community.</p>
                <Link to="/login">
                    <Button label="Login" primary />
                </Link>
            </div>
        </div>
    )
}
