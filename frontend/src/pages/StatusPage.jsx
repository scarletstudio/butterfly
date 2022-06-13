import React from 'react'
import { Link } from 'react-router-dom'
import { useBackendFetchJson } from '../app/utils'

const DEFAULT_STATUS = 'Contacting backend API...'

function getStatusMessage(res, error) {
    if (error) return `Error: ${error}`
    if (res) return JSON.stringify(res, null, 4)
    return DEFAULT_STATUS
}

export default function StatusPage() {
    const [res, error] = useBackendFetchJson({ route: '/' })
    const statusText = getStatusMessage(res, error)
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
