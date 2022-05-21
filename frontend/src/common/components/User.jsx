import '../../styles/User.css'

export function UserTile({ user }) {
    const { uid, displayName, photoURL } = user
    const alt = `Profile image for ${displayName}.`
    return (
        <div className="UserTile">
            <div className="ProfileImage">
                <img src={photoURL} alt={alt} className="Image" />
            </div>
            <div className="DisplayName">
                <span>{displayName}</span>
            </div>
        </div>
    )
}
