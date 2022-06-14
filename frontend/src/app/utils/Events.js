export function onEnter(callback) {
    return (e) => e.keyCode === 13 && callback && callback(e)
}
