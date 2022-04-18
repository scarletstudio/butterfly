import { Link } from 'react-router-dom'

import { useCurrentAuthUser } from '../common/utils/auth'
import { useGetMatches } from '../common/utils/match'
import { COMMUNITY } from '../common/utils/constants'

import '../styles/Chats.css'

function Match({data}) {
  const { id, release_tag, title } = data
  return (
    <div className="Match">
      <h3>{release_tag}</h3>
      <p>
        <Link to={`/chats/${id}`}>{title}</Link>
      </p>
    </div>
  )
}

export default function AllChatsPage() {
  const authUser = useCurrentAuthUser()
  const matches = useGetMatches(COMMUNITY, authUser?.uid)
  const matchEls = matches.length > 0
    ? matches.map((m) => (
      <Match key={m.id} data={m} />
    ))
    : <p>Loading matches...</p>
  return (
    <div className="Page Content AllChatsPage FullPage">
      <h1>Chats</h1>
      <p>Your chats will appear here.</p>
      <h2>Demo Community</h2>
      {matchEls}
    </div>
  )
}
