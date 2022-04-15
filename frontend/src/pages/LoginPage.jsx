import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import '../styles/LoginPage.css'

export default function LoginPage() {
  const navigateTo = useNavigate()
  return (
    <div className="Page Content LoginPage FullPage VerticalCenter">
      <div>
        <h1 className="BigTitle">Butterfly</h1>
        <p>Meet people in your community.</p>
        <p>
          <span className="Button Primary" onClick={(e) => navigateTo('/chats')}>
            <FontAwesomeIcon icon={faGoogle} className="IconBefore" />
            <span>Sign in with Google</span>
          </span>
        </p>
      </div>
    </div>
  )
}
