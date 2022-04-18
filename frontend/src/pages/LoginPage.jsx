import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { signInUser, signOutUser, useCurrentAuthUser } from '../common/utils/auth'
import { maybeUpdateUserDetails } from '../common/utils/user'
import { CurrentLogin } from '../common/components/Auth'
import { Error } from '../common/components/Errors'

import '../styles/LoginPage.css'

export default function LoginPage() {
  const [ loginError, setLoginError ] = useState(null)
  const authUser = useCurrentAuthUser()

  const navigateTo = useNavigate()

  const doLogIn = async () => {
    const { user, signInError } = await signInUser()
    if (user) {
      await maybeUpdateUserDetails(user)
      console.log(`Welcome, ${user.displayName}!`)
      setLoginError(null)
      navigateTo('/chats')
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
        <p>
          <span className="Button Primary" onClick={doLogIn}>
            <FontAwesomeIcon icon={faGoogle} className="IconBefore" />
            <span>Log in with Google</span>
          </span>
        </p>
        <Error hasError={loginError}>
          <p>Something went wrong:</p>
          <pre>{loginError?.toString()}</pre>
        </Error>
        <CurrentLogin authUser={authUser} doLogOut={doLogOut} />
      </div>
    </div>
  )
}
