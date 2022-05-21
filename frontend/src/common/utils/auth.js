import { useEffect, useState } from 'react'
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
        const { user } = await signInWithPopup(auth, provider)
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
    const [authUser, setAuthUser] = useState(null)

    // Update state of authenticated user
    const auth = getAuth()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthUser((prevAuthUser) => {
                if (prevAuthUser?.uid !== user?.uid) {
                    return user
                }
                return prevAuthUser
            })
        })
        return unsubscribe
    }, [auth])

    return authUser
}
