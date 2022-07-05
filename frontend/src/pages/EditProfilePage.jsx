import React from 'react'
import { Link } from 'react-router-dom'

import { COMMUNITY_CONFIG } from '../config/communities'
import { EditIntents, EditInterests } from '../app/attributes'
import { COMMUNITY } from '../app/constants'
import { useCurrentAuthUser } from '../app/login'
import { UserTile } from '../app/ui'
// TODO:(DINORA) Move communities selectors into separate file
function CommunitySelector({ communities }) {
    return (
        communities.length > 0 && (
            <select>
                {communities.map((community) => (
                    <option value={community.id} key={community.id}>
                        {community.name}
                    </option>
                ))}
            </select>
        )
    )
}
export default function EditProfilePage() {
    const authUser = useCurrentAuthUser()
    const communityConfig = COMMUNITY_CONFIG?.[COMMUNITY] || {}
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
                    <CommunitySelector communities={[]} />
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
