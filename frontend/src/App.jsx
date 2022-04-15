import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AllChatsPage from './pages/AllChatsPage'
import ChatPage from './pages/ChatPage'


function App() {
  return (
    <div className="App Theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<Layout />} >
            <Route path="login" element={<LoginPage />} />
            <Route path="chats">
              <Route index element={<AllChatsPage />} />
              <Route path=":chatId" element={<ChatPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
