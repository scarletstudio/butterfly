import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const apiKey = import.meta.env.VITE_firebase_apiKey
const authDomain = import.meta.env.VITE_firebase_authDomain
const projectId = import.meta.env.VITE_firebase_projectId
const storageBucket = import.meta.env.VITE_firebase_storageBucket
const messagingSenderId = import.meta.env.VITE_firebase_messagingSenderId
const appId = import.meta.env.VITE_firebase_appId

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export async function signInUser() {
  try {
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
