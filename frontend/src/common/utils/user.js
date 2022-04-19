import { useEffect, useState } from 'react'
import {
  getDatabase,
  onValue,
  ref,
  serverTimestamp,
  update,
} from 'firebase/database'

import { DB_PATH } from './constants'

/*
 * Returns a Promise to get data about a given user.
 */
export function getUserData(userId) {
  const db = getDatabase()
  const userPath = `${DB_PATH.USERS}/${userId}`
  const userRef = ref(db, userPath)
  return new Promise((resolve, reject) => {
    onValue(userRef, (snap) => {
      resolve({
        uid: snap.key,
        ...snap.val(),
      })
    })
  })
}

export function useGetUserDetails(userIdMap) {
  const [userDetails, setUserDetails] = useState({})
  useEffect(() => {
    Object.keys(userIdMap)
      .filter(k => !(k in userDetails))
      .map(getUserData)
      .forEach(async (promise) => {
        const userData = await promise
        setUserDetails((prev) => ({
          ...prev,
          [userData.uid]: userData,
        }))
      })
  }, userIdMap)
  return userDetails
}

/*
 * Use this method after a user logs in to update their user
 * details in our database.
 */
export async function maybeUpdateUserDetails(details) {
  try{
    if (!details?.uid) {
      throw 'No user ID provided to update user details.' 
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
    console.error('Failed to update user details.')
    console.log(details)
    console.error(err)
    return err
  }
}
