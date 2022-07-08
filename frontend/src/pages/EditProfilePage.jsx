/* eslint-disable */
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

export default function EditProfilePage() {
    const authUser = useCurrentAuthUser()
    const communityConfig = COMMUNITY_CONFIG?.[COMMUNITY] || {}
    const uid = authUser?.uid || null
    const [res, err] = useBackendFetchJson({
        route: `/attributes/community/${COMMUNITY}/users/${uid}/intents`,
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
                    <h2>Support</h2>
                    <EditIntents
                        intents={communityConfig?.intents}
                        updateIntent={updateIntent}
                        userIntentMap={userIntentMap}
                    />
                    <h2>Interests</h2>
                    <h2>Schedule</h2>
                    <EditInterests allInterests={communityConfig?.interests} />
                    <p>Coming soon...</p>
                </div>
            </div>
        )
    )
}
