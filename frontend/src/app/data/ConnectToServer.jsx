/* global localStorage */

import React, { useEffect, useState } from 'react'
import { Notification } from '../ui'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const LOCAL_STORAGE_LAST_PING = 'butterfly__last_ping'
const WAIT_MS_BEFORE_NEXT_PING = 1000 * 60 * 5 // 5 mins in ms

const SERVER_MESSAGES = {
    LOADING: 'Connecting to our server...',
    SUCCESS: 'Connected successfully!',
    FAILURE: 'Could not connect. Please reload page.',
}

/*
 * Send a request to wake up our server.
 * Return a promise that always resolves, even if there is a failure.
 * Will resolve with true if success, false if failure.
 */
async function pingServer() {
    return new Promise((resolve) => {
        fetch(`${BACKEND_URL}/`)
            .then(() => resolve(true))
            .catch(() => resolve(false))
    })
}

function getConnectionOutcome(isLoading, isSuccess) {
    if (isLoading) return ''
    return isSuccess ? 'Success' : 'Failure'
}

function getConnectionMessage(isLoading, isSuccess) {
    if (isLoading) return SERVER_MESSAGES.LOADING
    return isSuccess ? SERVER_MESSAGES.SUCCESS : SERVER_MESSAGES.FAILURE
}

export default function ConnectToServer({ pingFn = pingServer }) {
    const [isLoading, setIsLoading] = useState(true)
    const [isSuccess, setIsSuccess] = useState(true)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        let isSubscribed = true
        let openTimer = null
        let closeTimer = null

        // Only send ping if ping has not been sent recently.
        const lastPing = localStorage.getItem(LOCAL_STORAGE_LAST_PING)
        const sendPing = !lastPing || Date.now() - lastPing >= WAIT_MS_BEFORE_NEXT_PING

        if (sendPing) {
            openTimer = setTimeout(() => {
                if (isSubscribed) setIsVisible(true)
            }, 1000)
            pingFn().then((success) => {
                if (isSubscribed) {
                    setIsSuccess(success)
                    setIsLoading(false)
                }
                // If successful, close notification after one second.
                if (success) {
                    localStorage.setItem(LOCAL_STORAGE_LAST_PING, Date.now())
                    closeTimer = setTimeout(() => {
                        if (isSubscribed) setIsVisible(false)
                    }, 1000)
                }
            })
        } else {
            setIsVisible(false)
        }

        return () => {
            isSubscribed = false
            if (openTimer) clearTimeout(openTimer)
            if (closeTimer) clearTimeout(closeTimer)
        }
    }, [])

    const outcome = getConnectionOutcome(isLoading, isSuccess)
    const message = getConnectionMessage(isLoading, isSuccess)
    const animation = !isLoading && isSuccess ? 'FadeOut' : 'FadeIn'
    const classes = ['Bottom', 'Fixed', 'Centered', outcome, animation]

    return (
        <Notification classes={classes} visible={isVisible}>
            <p>{message}</p>
        </Notification>
    )
}
