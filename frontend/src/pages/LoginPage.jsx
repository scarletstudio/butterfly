import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import '../styles/LoginPage.css'

export default function LoginPage() {
  return (
    <div className="Page Content LoginPage FullPage VerticalCenter">
      <div>
        <h1 className="BigTitle">Butterfly</h1>
        <p>Meet people in your community.</p>
        <p>
          <span className="Button Primary">
            <FontAwesomeIcon icon={faGoogle} className="IconBefore" />
            <span>Sign in with Google</span>
          </span>
        </p>
      </div>
    </div>
  )
}
