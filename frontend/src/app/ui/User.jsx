import React from 'react'
import './User.css'

export function UserDisc({ user }) {
    const { displayName, photoURL } = user
    const alt = `Profile image for ${displayName}.`
    return (
        photoURL && (
            <div className="UserDisc">
                <img src={photoURL} alt={alt} className="Image" />
            </div>
        )
    )
}

export function UserTile({ user }) {
    const { displayName, photoURL } = user
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
