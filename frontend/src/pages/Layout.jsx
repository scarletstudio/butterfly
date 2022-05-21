import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'

import '../styles/Layout.css'

function MockLoginButton() {
    return (
        <div className="FloatingButton MockLoginButton">
            <Link to="/mocklogin" className="NoDecorate">
                <FontAwesomeIcon icon={faUserNinja} className="IconBefore" />
                <span className="FloatingButtonTooltip">Go to Mock Login</span>
            </Link>
        </div>
    )
}

export default function Layout() {
    return (
        <div className="Layout FullPage ">
            <Outlet />
            <MockLoginButton />
        </div>
    )
}
