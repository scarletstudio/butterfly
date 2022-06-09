import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export function withRouter(Story) {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    )
}
