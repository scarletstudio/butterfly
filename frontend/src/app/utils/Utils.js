export function pluralize(n, singular, plural = null) {
    const pluralForm = plural || `${singular}s`
    return n === 1 ? `${n} ${singular}` : `${n} ${pluralForm}`
}
