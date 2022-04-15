import { Link } from 'react-router-dom'

import '../styles/Chats.css'

export default function AllChatsPage() {
  return (
    <div className="Page Content AllChatsPage FullPage">
      <h1>Chats</h1>
      <p>Your chats will appear here.</p>
      <Link to="/chats/123">Chat 123</Link>
    </div>
  )
}
