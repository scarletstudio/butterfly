import React from 'react'
import { Link } from 'react-router-dom'
import { useBackendFetchJson } from '../app/utils'

const DEFAULT_STATUS = 'Contacting backend API...'

export default function StatusPage() {
    const status = useBackendFetchJson({ route: '/' })
    const statusText = status ? JSON.stringify(status, null, 4) : DEFAULT_STATUS
    return (
        <div className="Layout Page">
            <div>
                <h1 className="BigTitle">Status</h1>
                <Link to="/">Back to Home</Link>
                <pre>{statusText}</pre>
            </div>
        </div>
    )
}
