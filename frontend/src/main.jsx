import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/reset.css'
import './styles/main.css'
import './styles/theme.css'

// Register icons in library for use throughout the frontend
const registeredIcons = [
  faHeart,
]
library.add(registeredIcons)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
