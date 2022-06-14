import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import './Button.css'

interface ButtonProps {
    // Button contents
    label: string
    // Whether or not this is the main action, false if not specified
    primary?: boolean
    // Optional icon to show to the left of the label
    iconBefore?: IconDefinition
    // Optional icon to show to the right of the label
    iconAfter?: IconDefinition
    // Optional on click callback
    onClick?: () => void
}

export const Button = ({
    label,
    primary = false,
    iconBefore = null,
    iconAfter = null,
    ...props
}: ButtonProps) => {
    const typeClassName = primary ? 'Primary' : ''
    const classNames = ['Button', typeClassName].join(' ')
    const iconBeforeEl = iconBefore && <FontAwesomeIcon icon={iconBefore} className="IconBefore" />
    const iconAfterEl = iconAfter && <FontAwesomeIcon icon={iconAfter} className="IconAfter" />
    return (
        <span className={classNames} {...props}>
            {iconBeforeEl}
            <span>{label}</span>
            {iconAfterEl}
        </span>
    )
}
