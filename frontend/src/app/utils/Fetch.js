import { useState, useEffect } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export function useRawFetchJson({ url, options = {}, deps = [] }) {
    const [response, setResponse] = useState(null)
    useEffect(() => {
        async function getData() {
            const req = await fetch(url, options)
            const res = await req.json()
            setResponse(res)
        }
        getData()
    }, deps)
    return response
}

export function useBackendFetchJson({ route, ...args }) {
    return useRawFetchJson({
        url: `${BACKEND_URL}${route}`,
        ...args,
    })
}
