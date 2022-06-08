import React from 'react'
import { Outlet } from 'react-router-dom'

import '../app/styles/Layout.css'

export default function Layout() {
    return (
        <div className="Layout">
            <Outlet />
        </div>
    )
}
