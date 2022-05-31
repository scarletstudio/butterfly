import { useEffect, useState } from 'react'
import { getDatabase, onValue, ref, serverTimestamp, update } from 'firebase/database'

import { DB_PATH } from './constants'

/*
 * Returns a Promise to get data about a given user.
 */
export function getUserData(userId) {
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

export function useGetManyUserData(userIdMap) {
    const [userDetails, setUserDetails] = useState({})
    // Try to fetch new users whenever the input updates
    useEffect(() => {
        // Filter out user IDs that were already fetched
        Object.keys(userIdMap)
            .filter((k) => !(k in userDetails))
            .map(getUserData)
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
