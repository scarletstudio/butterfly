import React from 'react'
import './Logo.css'
import logoUrl from '../../../public/assets/logo-butterfly-rainbow.png'

export default function Logo({ size, align }) {
    return (
        <div className={`Logo ${size} ${align}`}>
            <img alt="Butterfly Logo" src={logoUrl} />
        </div>
    )
}
