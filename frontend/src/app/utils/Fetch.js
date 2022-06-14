import { useState, useEffect } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

/*
 * Async function to fetch JSON response from the backend API.
 */
export async function fetchFromBackend({ route, options = {} }) {
    const url = `${BACKEND_URL}${route}`
    const req = await fetch(url, options)
    const res = await req.json()
    return res
}

/*
 * React hook to fetch JSON response from a given URL.
 */
export function useRawFetchJson({ url, options = {}, deps = [] }) {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function getData() {
            try {
                const req = await fetch(url, options)
                const res = await req.json()
                setResponse(res)
            } catch (err) {
                setError(err)
            }
        }
        getData()
    }, deps)
    return [response, error]
}

/*
 * React hook to fetch JSON response from the backend API.
 */
export function useBackendFetchJson({ route, ...args }) {
    return useRawFetchJson({
        url: `${BACKEND_URL}${route}`,
        ...args,
    })
}
