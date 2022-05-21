const utcDateFormat = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
})

export function formatMatchDate(ts) {
    return ts && utcDateFormat.format(ts)
}
