import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import { signInUser } from '../common/utils/auth'
import { FirebaseAppContext } from '../common/utils/firebase'
import { Error } from '../common/components/Errors'

import '../styles/LoginPage.css'

export default function LoginPage() {
  const { firebaseApp } = useContext(FirebaseAppContext)

  const [ loginError, setLoginError ] = useState(null)

  const navigateTo = useNavigate()

  const doLogin = async () => {
    const { user, signInError } = await signInUser(firebaseApp)
    if (user) {
      console.log(`Welcome, ${user.displayName}!`)
      setLoginError(null)
      navigateTo('/chats')
    } else {
      console.error(signInError)
      setLoginError(signInError)
    }
  }

  return (
    <div className="Page Content LoginPage FullPage VerticalCenter">
      <div>
        <h1 className="BigTitle">Butterfly</h1>
        <p>Meet people in your community.</p>
        <p>
          <span className="Button Primary" onClick={doLogin}>
            <FontAwesomeIcon icon={faGoogle} className="IconBefore" />
            <span>Sign in with Google</span>
          </span>
        </p>
        <Error hasError={loginError}>
          <p>Something went wrong with your login:</p>
          <pre>{loginError?.toString()}</pre>
        </Error>
      </div>
    </div>
  )
}
