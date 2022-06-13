import React from 'react'
import './Logo.css'

export default function Logo({ size, align }) {
    return (
        <div className={`Logo ${size} ${align}`}>
            <img alt="Butterfly Logo" src="/src/assets/logo-butterfly-rainbow.png" />
        </div>
    )
}
