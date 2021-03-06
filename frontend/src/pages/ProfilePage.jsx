import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetManyUserData } from '../app/data'

export default function ProfilePage() {
    const { uid } = useParams()

    const userProfile = useGetManyUserData({ [uid]: true })?.[uid]

    if (!userProfile) {
        return <p>User not found.</p>
    }
    const { photoURL, displayName } = userProfile
    return (
        <div>
            <div className="ProfileImage">
                <img src={photoURL} alt="Profile" className="Image" />
            </div>
            <div className="DisplayName">
                <span>{displayName}</span>
            </div>
        </div>
    )
}
