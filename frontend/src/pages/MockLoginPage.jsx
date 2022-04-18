import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'

import { useCurrentAuthUser, signOutUser } from '../common/utils/auth'
import { maybeUpdateUserDetails } from '../common/utils/user'
import { MOCK_USERS, signInMockUser } from '../common/mock/auth'
import { CurrentLogin } from '../common/components/Auth'
import { Error } from '../common/components/Errors'

import '../styles/LoginPage.css'

function MockUserLoginSelector({ mockUsers, doLogIn }) {
  const selectorRef = createRef()
  const doMockUserLogin = () => {
    const mockUserEmail = selectorRef.current.value
    if (mockUserEmail) {
      doLogIn(mockUserEmail)
    }
  }
  const mockUserOptions = mockUsers.map(({ email, displayName }) => (
    <option key={email} value={email}>{displayName}</option>
  ))
  return (
    <div>
      <p>
        <select ref={selectorRef} className="LoginUserSelector">
          {mockUserOptions}
        </select>
      </p>
      <p>
        <span className="Button Primary" onClick={doMockUserLogin}>
          <FontAwesomeIcon icon={faUserNinja} className="IconBefore" />
          <span>Log in as Mock User</span>
        </span>
      </p>
      <p>
        <Link to="/login">Back to Real Login</Link>
      </p>
    </div>
  )
}

export default function MockLoginPage() {
  const [ loginError, setLoginError ] = useState(null)
  const authUser = useCurrentAuthUser()

  const doLogIn = async (mockUserEmail) => {
    const { user, signInError } = await signInMockUser(mockUserEmail)
    if (user) {
      await maybeUpdateUserDetails(user)
      console.log(`Welcome, ${user.displayName}!`)
      setLoginError(null)
    } else {
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
    <div className="Page Content LoginPage FullPage VerticalCenter">
      <div>
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