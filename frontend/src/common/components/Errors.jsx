import React from 'react'

export function Error({ hasError, children }) {
    return hasError && <div className="Error">{children}</div>
}
