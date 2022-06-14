import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'

import { CurrentLogin, signInUser, signOutUser, useCurrentAuthUser } from '../app/login'
import { maybeUpdateUserDetails } from '../app/data'
import { Button, Error, Logo } from '../app/ui'

import '../app/login/Login.css'

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

export default function LoginPage() {
    const [loginError, setLoginError] = useState(null)
    const authUser = useCurrentAuthUser()

    const navigateTo = useNavigate()

    const doLogIn = async () => {
        const { user, signInError } = await signInUser()
        if (user) {
            await maybeUpdateUserDetails(user)
            setLoginError(null)
            navigateTo('/chats')
        } else {
            // eslint-disable-next-line no-console
            console.error(signInError)
            setLoginError(signInError)
        }
    }

    const doLogOut = async () => {
        const { isSuccess, signOutError } = await signOutUser()
        if (!isSuccess) {
            setLoginError(signOutError)
        }
    }

    return (
        <div className="Page LoginPage FullHeight VerticalCenter">
            <div>
                <Logo size="Big" align="Centered" />
                <h1 className="BigTitle">Butterfly</h1>
                <p>Meet people in your community.</p>
                <Button
                    label="Log in with Google"
                    primary
                    iconBefore={faGoogle}
                    onClick={doLogIn}
                />
                <Error hasError={loginError}>
                    <p>Something went wrong:</p>
                    <pre>{loginError?.toString()}</pre>
                </Error>
                <CurrentLogin authUser={authUser} doLogOut={doLogOut} />
            </div>
            <MockLoginButton />
        </div>
    )
}
