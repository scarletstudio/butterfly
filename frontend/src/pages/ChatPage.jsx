import { Link, useParams } from 'react-router-dom'

import { useCurrentAuthUser } from '../common/utils/auth'
import { ChatApp } from '../common/components/Chat'
import { COMMUNITY } from '../common/utils/constants'

import '../styles/Chats.css'

export default function ChatPage() {
  const { chatId } = useParams()
  const fullChatId = `${COMMUNITY}/${chatId}`
  return (
    <div className="Content ChatPage FullPage">
      <div className="ChatContainer">
        <ChatApp chatId={fullChatId} />
        <p><Link to="/chats">Back to Chats</Link></p>
      </div>
    </div>
  )
}
