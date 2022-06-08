import React from 'react'

import { FirebaseAppContext, createFirebaseApp } from '../../common/utils/firebase'

export const withFirebase = (Story) => {
    const firebaseApp = createFirebaseApp()
    return (
        <FirebaseAppContext.Provider value={firebaseApp}>
            <Story />
        </FirebaseAppContext.Provider>
    )
}
