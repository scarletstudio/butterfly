import { Outlet } from 'react-router-dom'

import '../styles/Layout.css'

export default function App() {
  return (
    <div className="Layout FullPage ">
      <Outlet />
    </div>
  )
}
