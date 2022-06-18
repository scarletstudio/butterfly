import React from 'react'
import { useParams } from 'react-router-dom'

import { useCurrentAuthUser, signInUser } from '../app/login'
import { fetchFromBackend } from '../app/utils'
import { COMMUNITY_CONFIG } from '../config/communities'
import { JoinCommunity } from '../app/community'
import { ConnectToServer, maybeUpdateUserDetails } from '../app/data'

async function doJoin(communityId, uid) {
    const route = `/core/community/${communityId}/join/${uid}`
    const res = await fetchFromBackend({ route, options: { method: 'POST' } })
    return res
}

async function doLogIn() {
    const { user } = await signInUser()
    if (user) await maybeUpdateUserDetails(user)
}

export default function JoinPage() {
    const { communityId } = useParams()
    const authUser = useCurrentAuthUser()
    return (
        <div className="Layout Page">
            <JoinCommunity
                communityId={communityId}
                communityConfig={COMMUNITY_CONFIG}
                authUser={authUser}
                doJoin={doJoin}
                doLogIn={doLogIn}
            />
            <ConnectToServer />
        </div>
    )
}
