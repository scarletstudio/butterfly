import { useParams } from 'react-router-dom'

import { ChatApp } from '../common/components/Chat'

import '../styles/Chats.css'

export default function ChatPage() {
  const { chatId } = useParams()
  return (
    <div className="Content ChatPage FullPage">
      <div className="ChatContainer">
        <ChatApp chatId={chatId} />
      </div>
    </div>
  )
}
