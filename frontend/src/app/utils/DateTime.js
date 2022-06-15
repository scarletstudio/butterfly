const utcDateFormat = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
})

const utcShortDateFormat = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
})

export function formatMatchDate(ts) {
    return ts && utcDateFormat.format(ts)
}

export function formatShortDate(ts) {
    return ts && utcShortDateFormat.format(ts)
}
