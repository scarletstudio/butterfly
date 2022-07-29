import { fetchFromBackend } from './Fetch'

export function saveEvent(eventType, data) {
    return fetchFromBackend({
        route: '/analytics/collect/',
        options: {
            method: 'POST',
            // eslint-disable-next-line camelcase
            body: JSON.stringify({ event_type: eventType, data }),
        },
    })
}
