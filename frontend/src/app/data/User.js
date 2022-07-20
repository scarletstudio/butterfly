import { useEffect, useState } from 'react'
import { getDatabase, onValue, ref, serverTimestamp, update } from 'firebase/database'

import { getAnalytics } from 'firebase/analytics'

import { DB_PATH } from '../constants'
import { COMMUNITY_CONFIG } from '../../config/communities'
import { fetchFromBackend } from '../utils'

/*
 * Async function to get data about a given user.
 * Retrieves data from the backend API, does not require authentication.
 */
export async function fetchUserData(userId) {
    const res = await fetchFromBackend({ route: `/core/user/${userId}` })
    return res?.data
}

/*
 * Returns a Promise to get data about a given user.
 * Retrieves data directly from Firebase, requires user to be authenticated.
 */
export function getUserData(userId) {
    getAnalytics()
    const db = getDatabase()
    const userPath = `${DB_PATH.USERS}/${userId}`
    const userRef = ref(db, userPath)
    return new Promise((resolve) => {
        onValue(userRef, (snap) => {
            // To check for unknown users and not add them
            const userData = snap.val()
            resolve(
                userData && {
                    uid: snap.key,
                    ...userData,
                }
            )
        })
    })
}

/*
 * Hook to get data for many users.
 * @param userIdMap: map of user IDs to get.
 * @param doFetch: async or promise function to get a user by user ID.
 * @returns map of user IDs to user data.
 */
export function useGetManyUserData(userIdMap, doFetch = fetchUserData) {
    const [userDetails, setUserDetails] = useState({})
    // Try to fetch new users whenever the input updates
    useEffect(() => {
        // Filter out user IDs that were already fetched
        Object.keys(userIdMap)
            // Annoyingly, undefined values get turned into a string when used
            // as a dynamic map key, so we have to add this check:
            .filter((k) => k !== 'undefined' && !(k in userDetails))
            .map(doFetch)
            .forEach((promise) => {
                promise
                    .then((userData) => {
                        if (userData?.uid) {
                            // Add the new user to the existing state
                            setUserDetails((prev) => ({
                                ...prev,
                                [userData.uid]: userData,
                            }))
                        }
                    })
                    .catch((err) => {
                        // eslint-disable-next-line no-console
                        console.log('Error while fetching many user records.')
                        // eslint-disable-next-line no-console
                        console.error(err)
                    })
            })
    }, [userIdMap, userDetails])
    return userDetails
}

/*
 * Use this method after a user logs in to update their user
 * details in our database.
 */
export async function maybeUpdateUserDetails(details) {
    try {
        if (!details?.uid) {
            throw new Error('No user ID provided to update user details.')
        }
        const { uid, email, displayName, photoURL } = details
        const db = getDatabase()
        const userPath = `${DB_PATH.USERS}/${uid}`
        const userRef = ref(db, userPath)
        await update(userRef, {
            uid,
            email,
            displayName,
            photoURL,
            latestLogin: serverTimestamp(),
        })
        return null
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Failed to update user details.')
        // eslint-disable-next-line no-console
        console.log(details)
        // eslint-disable-next-line no-console
        console.error(err)
        return err
    }
}

export function useUserCommunities(uid) {
    const [communityId, setCommunityId] = useState()

    // Fetch the user data to get the communities they are part of
    const user = useGetManyUserData({ [uid]: true }, getUserData)?.[uid]
    const communities = Object.keys(user?.communities || {}).map((k) => ({
        ...COMMUNITY_CONFIG?.[k],
        ...user?.communities?.[k],
    }))

    // Select the first active community
    const firstActiveCommunity = communities.filter((c) => c.active)?.[0]?.id
    useEffect(() => {
        setCommunityId(firstActiveCommunity)
    }, [firstActiveCommunity])

    return [communityId, setCommunityId, communities]
}
