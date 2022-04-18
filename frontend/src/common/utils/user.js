import {
  getDatabase,
  ref,
  serverTimestamp,
  update,
} from 'firebase/database'

import { DB_PATH } from './constants'

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
