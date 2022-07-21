import React from 'react'
import { Link } from 'react-router-dom'

import { COMMUNITY_CONFIG } from '../config/communities'
import { EditIntents, EditInterests } from '../app/attributes'
import { CommunitySelector } from '../app/community'
import { useUserCommunities } from '../app/data'
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
}

export default function EditProfilePage() {
    const authUser = useCurrentAuthUser()
    const uid = authUser?.uid
    const [communityId, setCommunityId, communities] = useUserCommunities(uid)
    const communityConfig = COMMUNITY_CONFIG?.[communityId] || {}

    const [res, err] = useBackendFetchJson({
        route: `/attributes/community/${communityId}/users/${uid}/intents`,
        deps: [communityId, uid],
        isValid: communityId && uid,
    })
    const userIntents = res?.attributes || []
    const userIntentMap = userIntents.reduce(
        (dict, intent) => ({ ...dict, [intent.code]: intent?.data }),
        {}
    )
    const updateIntent = (code, side, value) => submitIntent(communityId, uid, code, side, value)

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
                    <h2>Intents</h2>
                    <EditIntents
                        intents={communityConfig?.intents}
                        updateIntent={updateIntent}
                        userIntentMap={userIntentMap}
                    />
                    <h2>Interests</h2>
                    <EditInterests allInterests={communityConfig?.interests} />
                    <h2>Schedule</h2>
                    <p>Choose the days/times that you are available to chat with other people.</p>
                </div>
            </div>
        )
    )
}
