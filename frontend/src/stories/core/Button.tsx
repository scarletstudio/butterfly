import React from 'react'
import './button.css'

interface ButtonProps {
    // Whether or not this is the main action, false if not specified
    primary?: boolean
    // Button contents
    label: string
    // Optional on click callback
    onClick?: () => void
}

export const Button = ({ primary = false, label, ...props }: ButtonProps) => {
    const typeClassName = primary ? 'Primary' : ''
    const classNames = ['Button', typeClassName].join(' ')
    return (
        <button type="button" className={classNames} {...props}>
            {label}
        </button>
    )
}
