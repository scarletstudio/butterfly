import { createContext } from 'react'
import { initializeApp } from 'firebase/app'

const apiKey = import.meta.env.VITE_firebase_apiKey
const authDomain = import.meta.env.VITE_firebase_authDomain
const projectId = import.meta.env.VITE_firebase_projectId
const storageBucket = import.meta.env.VITE_firebase_storageBucket
const messagingSenderId = import.meta.env.VITE_firebase_messagingSenderId
const appId = import.meta.env.VITE_firebase_appId

/*
 * This method should only be called once, `app`
 * can then be referenced via context provider
 */
export function createFirebaseApp() {
  const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  };
  const app = initializeApp(firebaseConfig)
  return app
}

export const FirebaseAppContext = createContext()
