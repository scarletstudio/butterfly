import React from 'react'

export function Error({ hasError, children }) {
    return hasError && <div className="Card Full Error">{children}</div>
}
