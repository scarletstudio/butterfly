import React from 'react'
import { Link } from 'react-router-dom'

import { COMMUNITY_CONFIG } from '../config/communities'
import { EditIntents, EditInterests } from '../app/attributes'
import { COMMUNITY } from '../app/constants'
import { useCurrentAuthUser } from '../app/login'
import { UserTile } from '../app/ui'
import { fetchFromBackend, useBackendFetchJson } from '../app/utils'

// Function to update user interests when checkbox value changes
async function submitInterest(community, uid, code, value) {
    const attributeUpdate = { update: value }
    await fetchFromBackend({
        route: `/attributes/community/${community}/users/${uid}/interests/${code}`,
        options: {
            method: 'POST',
            body: JSON.stringify(attributeUpdate),
        },
    })
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
    // eslint-disable-next-line no-unused-vars
    const [interestRes, interestErr] = useBackendFetchJson({
        route: `/attributes/community/${COMMUNITY}/users/${uid}/interests`,
        deps: [uid],
    })
    const userInterests = interestRes?.attributes || []

    const userInterestsMap = userInterests.reduce(
        (dict, interest) => ({ ...dict, [interest.code]: interest?.data }),
        {}
    )
    const updateInterest = (code, value) => submitInterest(COMMUNITY, uid, code, value)
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
                    <EditInterests
                        allInterests={communityConfig?.interests}
                        updateInterest={updateInterest}
                        userInterestsMap={userInterestsMap}
                    />
                    <h2>Schedule</h2>

                    <p>Coming soon...</p>
                </div>
            </div>
        )
    )
}
