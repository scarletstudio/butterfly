import { useState } from 'react'
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

export async function signInUser() {
  try {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth, provider)
    const user = res.user
    return {
      user,
      signInError: null,
    }
  } catch (err) {
    return {
      user: null,
      signInError: err,
    }
  }
}

export async function signOutUser() {
  try {
    const auth = getAuth()
    await signOut(auth)
    return {
      isSuccess: true,
      signOutError: null,
    }
  } catch (err) {
    return {
      isSuccess: false,
      signOutError: err,
    }
  }
}

export function useCurrentAuthUser() {
  const [ authUser, setAuthUser ] = useState(null)

  // Update based on state of authenticated user
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    setAuthUser((prevAuthUser) => {
      if (prevAuthUser !== user) {
        return user
      }
      return authUser
    })
  })

  return authUser
}
