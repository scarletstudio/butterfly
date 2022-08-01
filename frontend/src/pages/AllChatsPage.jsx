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
function useFetchBlockedUsers(myUid) {
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
    const blockedUsers = useFetchBlockedUsers(authUser?.uid)

    const matchesWithBlocks = matches.map((match) => ({
        ...match,
        hasBlockedUser: Object.keys(match.participants).some(
            (participant) => participant in blockedUsers
        ),
    }))

    const unblockedMatches = matchesWithBlocks.filter((m) => !m.hasBlockedUser)
    const blockedMatches = matchesWithBlocks.filter((m) => m.hasBlockedUser)

    const matchedUserIds = matches.reduce(
        (agg, m) => ({
            ...agg,
            ...m.participants,
        }),
        {}
    )

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
            <ChatInbox chats={unblockedMatches} users={matchedUsers} />

            {/* TODO: Make this a collapsable element */}
            <div className={blockedMatches.length === 0 ? 'Hidden' : ''}>
                <h1>Hidden Conversations</h1>
                <ChatInbox chats={blockedMatches} users={matchedUsers} />
            </div>
        </div>
    )
}
