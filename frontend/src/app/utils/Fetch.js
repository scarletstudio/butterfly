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
 * url: URL to fetch
 * options: settings for request
 * deps: React state variables for hook to depend on
 * isValid: if true, send the request, otherwise, skip it
 */
export function useRawFetchJson({ url, options = {}, deps = [], isValid }) {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const shouldGetData = isValid !== undefined && isValid !== null
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
        if (shouldGetData) getData()
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
