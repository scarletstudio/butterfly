/* global document */
import { fetchFromBackend } from './Fetch'

export function saveEvent(eventType, data) {
    return fetchFromBackend({
        route: '/analytics/collect/',
        options: {
            method: 'POST',
            body: JSON.stringify({
                // eslint-disable-next-line camelcase
                event_type: eventType,
                host: document.location.host,
                page_url: document.location.pathname,
                data,
            }),
        },
    })
}
