import { useEffect, useState } from 'react'
import { equalTo, getDatabase, onValue, orderByChild, query, ref } from 'firebase/database'

import { DB_PATH } from '../constants'
import { COMMUNITY_CONFIG } from '../../config/communities'
import { getUserData, useGetManyUserData } from './User'

/*
 * Hook to get community matches for a user.
 */
export function useGetMatches(communityId, userId) {
    const [matches, setMatches] = useState([])
    useEffect(() => {
        if (!communityId || !userId) return
        const db = getDatabase()
        const path = `${DB_PATH.MATCHES}/${communityId}`
        const matchesRef = ref(db, path)
        const queryRef = query(matchesRef, orderByChild('for'), equalTo(userId))
        onValue(queryRef, (snap) => {
            const matchMap = snap.val() || {}
            const matchList = Object.values(matchMap)
            setMatches(matchList)
        })
    }, [communityId, userId])
    return matches
}

/*
 * Returns a Promise to get data of matches for a user in a community.
 * Retrieves data directly from Firebase, requires user to be authenticated.
 */
export function getMatchData(userId, communityId) {
    const db = getDatabase()
    const path = `${DB_PATH.MATCHES}/${communityId}`
    const matchesRef = ref(db, path)
    const queryRef = query(matchesRef, orderByChild('for'), equalTo(userId))
    return new Promise((resolve) => {
        onValue(queryRef, (snap) => {
            const matchMap = snap.val() || {}
            const matchList = Object.values(matchMap).map((m) => ({
                ...m,
                community: communityId,
            }))
            resolve({ communityId, matches: matchList })
        })
    })
}

/*
 * Hook to get many matches for a user from many communities.
 */
export function useGetManyMatchData(userId, communityIdMap) {
    const [communityMatches, setCommunityMatches] = useState({})
    // Try to fetch new matches whenever the input updates
    useEffect(() => {
        if (!userId) return
        // Filter out community IDs that were already fetched
        Object.keys(communityIdMap)
            .filter((k) => !(k in communityMatches))
            .map((communityId) => getMatchData(userId, communityId))
            .forEach((promise) => {
                promise
                    .then((matchData) => {
                        // Add the new matches to the existing state
                        setCommunityMatches((prev) => ({
                            ...prev,
                            [matchData.communityId]: matchData.matches,
                        }))
                    })
                    .catch((err) => {
                        // eslint-disable-next-line no-console
                        console.log('Error while fetching many match records.')
                        // eslint-disable-next-line no-console
                        console.error(err)
                    })
            })
    }, [userId, communityIdMap, communityMatches])
    return communityMatches
}

/*
 * Hook to get all of a user's matches across al of their communities.
 * Fetches from Firebase to avoid dependency on API, so user must be logged in.
 */
export function useGetAllUserMatches(uid) {
    const user = useGetManyUserData({ [uid]: true }, getUserData)?.[uid]
    const communities = user?.communities || {}
    const matchesByCommunity = useGetManyMatchData(uid, communities)
    // Combine matches from all communities into one array, with community data
    const matches = Object.values(matchesByCommunity)
        .reduce((arr, val) => [...arr, ...val], [])
        .filter((m) => m.release_timestamp < Date.now())
        .map((m) => ({
            ...m,
            communityConfig: COMMUNITY_CONFIG?.[m?.community] || {},
        }))
    return matches
}
