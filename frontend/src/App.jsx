import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { FirebaseAppContext, createFirebaseApp } from './common/utils/firebase'

import Layout from './pages/Layout'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AllChatsPage from './pages/AllChatsPage'
import ChatPage from './pages/ChatPage'

import MockLoginPage from './pages/MockLoginPage'

const BASE_URL = '/butterfly'
const REDIRECT_PATHNAME_KEY = 'butterfly__pathname'

function AppRouting() {
  // Handle redirect on static site
  const navigateTo = useNavigate();
  useEffect(() => {
    const redirectFullPathname = localStorage.getItem(REDIRECT_PATHNAME_KEY)
    if (redirectFullPathname) {
      localStorage.setItem(REDIRECT_PATHNAME_KEY, '')
      const redirectPathname = redirectFullPathname.substring(BASE_URL.length)
      navigateTo(redirectPathname)
    }
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<Layout />} >
          <Route path="login" element={<LoginPage />} />
          <Route path="chats">
            <Route index element={<AllChatsPage />} />
            <Route path=":chatId" element={<ChatPage />} />
          </Route>
          <Route path="mocklogin" element={<MockLoginPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default function App() {
  const firebaseApp = createFirebaseApp()
  return (
    <div className="App Theme">
      <FirebaseAppContext.Provider value={firebaseApp}>
        <AppRouting />
      </FirebaseAppContext.Provider>
    </div>
  )
}
