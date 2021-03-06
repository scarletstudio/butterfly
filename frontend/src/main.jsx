/* global document */
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app/styles/Reset.css'
import './app/styles/Main.css'
import './app/styles/Theme.css'

// Register icons in library for use throughout the frontend
const registeredIcons = [faHeart]
library.add(registeredIcons)

// Set page title for entire app
document.title = 'Butterfly'

// Initialize React app
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="butterfly">
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
