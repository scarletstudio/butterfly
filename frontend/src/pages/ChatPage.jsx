import { useParams } from 'react-router-dom'

import { useCurrentAuthUser } from '../common/utils/auth'

import '../styles/Chats.css'

export default function ChatPage() {
  const { chatId } = useParams()
  const authUser = useCurrentAuthUser()
  return (
    <div className="Page Content ChatPage FullPage">
      <h1>Chat with Someone</h1>
      <p>Your messages will appear here.</p>
      <pre>Chat ID: {chatId}</pre>
      <div className="Message">This is an example message.</div>
    </div>
  )
}
