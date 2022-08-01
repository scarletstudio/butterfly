import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useCurrentAuthUser } from '../app/login'
import { getUserData, useGetManyUserData, useGetAllUserMatches } from '../app/data'
import { ChatInbox } from '../app/inbox'
import { saveEvent, useBackendFetchJson } from '../app/utils'

const ChatInboxHeader = () => (
    <div className="Header Light">
        <h1 className="BigTitle">
            <Link to="/">
                <span>Butterfly Chats</span>
            </Link>
        </h1>
        <p>Each week, you will be matched to another person in your community.</p>
        <p>
            <span>Check back on Mondays to see who you are matched with! </span>
            <span>
                Update <Link to="/me">your profile</Link> for better matches.
            </span>
        </p>
    </div>
)

// find the blocked accounts of the user
function FetchBlockedUsers(myUid) {
    const [res] = useBackendFetchJson({
        route: `/chat/block/user/${myUid}`,
        deps: [myUid],
        isValid: myUid,
    })
    const blockedUsers = res?.blocks || []
    // create a blocked user dictionary
    const reduceList = blockedUsers.reduce((accumulator, item) => {
        if (item.blocked === true) {
            accumulator[item.uid] = item.blocked
        }
        return accumulator
    }, {})
    return reduceList
}

export default function AllChatsPage() {
    const authUser = useCurrentAuthUser()
    const matches = useGetAllUserMatches(authUser?.uid)
    const matchedUserIds = matches.reduce(
        (agg, m) => ({
            ...agg,
            ...m.participants,
        }),
        {}
    )

    const blockedUsers = FetchBlockedUsers(authUser?.uid)

    const matchedUsers = useGetManyUserData(matchedUserIds, getUserData)
    useEffect(() => {
        if (authUser?.uid) {
            saveEvent('view_chat_inbox', {
                user: authUser.uid,
            })
        }
    }, [authUser?.uid])

    return (
        <div className="AllChatsPage FullHeight LightBackground">
            <ChatInboxHeader />
            <ChatInbox chats={matches} users={matchedUsers} blockedUsers={blockedUsers} />
        </div>
    )
}
