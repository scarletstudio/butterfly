/* global localStorage */

import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

import { getAnalytics } from 'firebase/analytics'
import { FirebaseAppContext, createFirebaseApp } from './app/utils'

import Layout from './pages/Layout'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import AllChatsPage from './pages/AllChatsPage'
import ChatPage from './pages/ChatPage'
import EditProfilePage from './pages/EditProfilePage'
import JoinPage from './pages/JoinPage'
import StatusPage from './pages/StatusPage'
import MockLoginPage from './pages/MockLoginPage'
import StyleGuidePage from './pages/StyleGuide'

const BASE_URL = '/butterfly'
const REDIRECT_PATHNAME_KEY = 'butterfly__pathname'

function AppRouting() {
    // Handle redirect on static site
    const navigateTo = useNavigate()
    useEffect(() => {
        const redirectFullPathname = localStorage.getItem(REDIRECT_PATHNAME_KEY)
        if (redirectFullPathname) {
            localStorage.setItem(REDIRECT_PATHNAME_KEY, '')
            const redirectPathname = redirectFullPathname.substring(BASE_URL.length)
            navigateTo(redirectPathname)
        }
    }, [navigateTo])

    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<Layout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="me" element={<EditProfilePage />} />
                <Route path="join">
                    <Route path=":communityId" element={<JoinPage />} />
                </Route>
                <Route path="profile">
                    <Route path=":uid" element={<ProfilePage />} />
                </Route>
                <Route path="chats">
                    <Route index element={<AllChatsPage />} />
                    <Route path=":communityId/:chatId" element={<ChatPage />} />
                </Route>
                <Route path="status" element={<StatusPage />} />
                <Route path="mocklogin" element={<MockLoginPage />} />
                <Route path="resources">
                    <Route path="styleguide" element={<StyleGuidePage />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default function App() {
    const firebaseApp = createFirebaseApp()
    getAnalytics()
    return (
        <div className="App Theme">
            <FirebaseAppContext.Provider value={firebaseApp}>
                <AppRouting />
            </FirebaseAppContext.Provider>
        </div>
    )
}
