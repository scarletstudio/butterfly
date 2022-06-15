import React from 'react'
import './Logo.css'
// eslint-disable-next-line
import logoUrl from '/assets/logo-butterfly-rainbow.png'

export default function Logo({ size, align }) {
    return (
        <div className={`Logo ${size} ${align}`}>
            <img alt="Butterfly Logo" src={logoUrl} />
        </div>
    )
}
