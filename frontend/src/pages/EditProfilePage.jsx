import React from 'react'
import { Link } from 'react-router-dom'

import { COMMUNITY_CONFIG } from '../config/communities'
import { EditIntents, EditInterests } from '../app/attributes'
import { CommunitySelector } from '../app/community'
import { useUserCommunities } from '../app/data'
import { useCurrentAuthUser } from '../app/login'
import { UserTile } from '../app/ui'

export default function EditProfilePage() {
    const authUser = useCurrentAuthUser()
    const uid = authUser?.uid
    const [communityId, setCommunityId, communities] = useUserCommunities(uid)
    const communityConfig = COMMUNITY_CONFIG?.[communityId] || {}

    return (
        authUser && (
            <div className="EditProfilePage">
                <div className="Header">
                    <h1 className="BigTitle">Edit Profile</h1>
                    <p>Update your profile to help us give you better matches!</p>
                    <UserTile user={authUser} />
                    <Link to="/chats">
                        <p>Back to your matches.</p>
                    </Link>
                </div>
                <div className="Page">
                    <CommunitySelector
                        communities={communities}
                        selected={communityId}
                        setCommunityId={setCommunityId}
                    />
                    <h2>Support</h2>
                    <EditIntents allIntents={communityConfig?.intents} />
                    <h2>Interests</h2>
                    <EditInterests allInterests={communityConfig?.interests} />
                    <h2>Schedule</h2>
                    <p>Coming soon...</p>
                </div>
            </div>
        )
    )
}
