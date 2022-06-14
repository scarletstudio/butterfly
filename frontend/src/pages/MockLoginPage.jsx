import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'

import { useCurrentAuthUser, signOutUser, CurrentLogin } from '../app/login'
import { maybeUpdateUserDetails } from '../app/data'
import { MOCK_USERS, signInMockUser } from '../app/mock'
import { Button, Error, Logo } from '../app/ui'

import '../app/login/Login.css'

function MockUserLoginSelector({ mockUsers, doLogIn }) {
    const selectorRef = createRef()
    const doMockUserLogin = () => {
        const mockUserEmail = selectorRef.current.value
        if (mockUserEmail) {
            doLogIn(mockUserEmail)
        }
    }
    const mockUserOptions = mockUsers.map(({ email, displayName }) => (
        <option key={email} value={email}>
            {displayName}
        </option>
    ))
    return (
        <div>
            <p>
                <select ref={selectorRef} className="LoginUserSelector">
                    {mockUserOptions}
                </select>
            </p>
            <Button
                label="Log in as Mock User"
                primary
                iconBefore={faUserNinja}
                onClick={doMockUserLogin}
            />
            <p>
                <Link to="/login">Back to Real Login</Link>
                <span> | </span>
                <Link to="/status">Status Page</Link>
            </p>
        </div>
    )
}

export default function MockLoginPage() {
    const [loginError, setLoginError] = useState(null)
    const authUser = useCurrentAuthUser()

    const doLogIn = async (mockUserEmail) => {
        const { user, signInError } = await signInMockUser(mockUserEmail)
        if (user) {
            await maybeUpdateUserDetails(user)
            setLoginError(null)
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
                <hr />
                <h2>Mock User Login</h2>
                <MockUserLoginSelector doLogIn={doLogIn} mockUsers={MOCK_USERS} />
                <Error hasError={loginError}>
                    <p>Something went wrong:</p>
                    <pre>{loginError?.toString()}</pre>
                </Error>
                <CurrentLogin authUser={authUser} doLogOut={doLogOut} />
            </div>
        </div>
    )
}
