import React from 'react'
import { Link } from 'react-router-dom'

import { COMMUNITY_CONFIG } from '../config/communities'
import { EditIntents, EditInterests } from '../app/attributes'
import { COMMUNITY } from '../app/constants'
import { useCurrentAuthUser } from '../app/login'
import { UserTile } from '../app/ui'
import { useBackendFetchJson, fetchFromBackend } from '../app/utils'

// Call function to update user intent
async function submitIntent(community, uid, code, side, value) {
    // New value for the attribute
    const attributeUpdate = { update: { [side]: value } }
    const res = await fetchFromBackend({
        route: `/attributes/community/${community}/users/${uid}/intents/${code}`,
        options: {
            method: 'POST',
            body: JSON.stringify(attributeUpdate),
        },
    })
    console.log(res?.success) // true
}

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
    const uid = authUser?.uid || null
    const [res, err] = useBackendFetchJson({
        route: `/attributes/community/${COMMUNITY}/users/${uid}/intents`,
        deps: [uid],
    })
    console.log(res?.attributes)
    const userIntents = res?.attributes || []
    const userIntentMap = userIntents.reduce(
        (dict, intent) => ({ ...dict, [intent.code]: intent?.data }),
        {}
    )
    console.log(userIntentMap)
    const updateIntent = (code, side, value) => submitIntent(COMMUNITY, uid, code, side, value)
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
                    <h2>Intents</h2>
                    <EditIntents
                        intents={communityConfig?.intents}
                        updateIntent={updateIntent}
                        userIntentMap={userIntentMap}
                    />
                    <h2>Interests</h2>
                    <EditInterests allInterests={communityConfig?.interests} />
                    <h2>Schedule</h2>
                    <p>Coming soon...</p>
                </div>
            </div>
        )
    )
}
