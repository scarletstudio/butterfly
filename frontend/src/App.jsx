import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import Layout from './pages/Layout'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AllChatsPage from './pages/AllChatsPage'
import ChatPage from './pages/ChatPage'

const REDIRECT_PATHNAME_KEY = 'butterfly__pathname'

function App() {
  // Handle redirect on static site
  const navigateTo = useNavigate();
  useEffect(() => {
    const redirectPathname = localStorage.getItem(REDIRECT_PATHNAME_KEY)
    if (redirectPathname) {
      localStorage.setItem(REDIRECT_PATHNAME_KEY, '')
      navigateTo(redirectPathname)
    }
  }, [])

  return (
    <div className="App Theme">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<Layout />} >
          <Route path="login" element={<LoginPage />} />
          <Route path="chats">
            <Route index element={<AllChatsPage />} />
            <Route path=":chatId" element={<ChatPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
