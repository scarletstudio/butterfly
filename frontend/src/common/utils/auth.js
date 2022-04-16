import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

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
