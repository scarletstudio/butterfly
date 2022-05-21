import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export function CurrentLogin({ authUser, doLogOut }) {
    return (
        authUser && (
            <div>
                <hr />
                <p>Currently logged in as {authUser.displayName}.</p>
                <p>
                    <Link to="/chats">Go to Chats</Link>
                </p>
                <p>
                    <span className="Button" onClick={doLogOut}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="IconBefore" />
                        <span>Log Out</span>
                    </span>
                </p>
            </div>
        )
    )
}
