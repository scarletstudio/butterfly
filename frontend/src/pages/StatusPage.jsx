/* global Notification */
/* global prompt */

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { faBell } from '@fortawesome/free-solid-svg-icons'

import { FirebaseAppContext, useBackendFetchJson } from '../app/utils'
import { Button } from '../app/ui'

const DEFAULT_STATUS = 'Contacting backend API...'
const VAPID_KEY =
    'BIUHqTsoPcfaNSwYTav69J-Mt_QUQgkiJZG4Klg_Qej000U1550cJVFo3ovKhxWRIm70u6_FQTSGbhlZF7uDCSI'

function getStatusMessage(res, error) {
    if (error) return `Error: ${error}`
    if (res) return JSON.stringify(res, null, 4)
    return DEFAULT_STATUS
}

async function authorizeNotifications(messaging) {
    try {
        const permission = await Notification.requestPermission()
        if (permission !== 'granted') {
            // eslint-disable-next-line no-console
            console.log('Permission not granted:')
            // eslint-disable-next-line no-console
            console.log(permission)
            return [null, null]
        }
        const token = await getToken(messaging, { vapidKey: VAPID_KEY })
        if (!token) {
            // eslint-disable-next-line no-console
            console.log('No token. Request permission to generate one.')
            return [null, null]
        }
        return [token, null]
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error while requesting permission for notifications:')
        // eslint-disable-next-line no-console
        console.error(error)
        return [null, error]
    }
}

export default function StatusPage() {
    const [res, error] = useBackendFetchJson({ route: '/' })
    const statusText = getStatusMessage(res, error)
    const app = useContext(FirebaseAppContext)
    const messaging = getMessaging(app)
    const doTestNotification = async () => {
        const [token, notifErr] = await authorizeNotifications(messaging)
        if (notifErr) return
        // eslint-disable-next-line no-console
        console.log(token)
        // eslint-disable-next-line no-alert
        prompt('Token:', token)
    }
    onMessage(messaging, (payload) => {
        // eslint-disable-next-line no-console
        console.log(payload)
    })
    return (
        <div className="Layout Page">
            <div>
                <h1 className="BigTitle">Status</h1>
                <Link to="/">Back to Home</Link>
                <h2>Backend API</h2>
                <pre>{statusText}</pre>
                <h2>Push Notifications</h2>
                <Button
                    label="Send Test Notification"
                    iconBefore={faBell}
                    onClick={doTestNotification}
                />
            </div>
        </div>
    )
}
