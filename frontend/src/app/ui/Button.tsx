import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import './Button.css'

import { onEnter } from '../utils'

interface ButtonProps {
    // Button contents
    label: string
    // Whether or not this is the main action, false if not specified
    primary?: boolean
    // Optional icon to show to the left of the label
    iconBefore?: IconDefinition
    // Optional icon to show to the right of the label
    iconAfter?: IconDefinition
    // Optional event handlers
    onClick?: () => void
    onKeyDown?: () => void
    // Tells the browser the role of this element
    role?: string
    // Tells the browser that this element can be focused with the tab key
    tabIndex?: number
}

export const Button = ({
    label,
    primary = false,
    iconBefore = null,
    iconAfter = null,
    role = 'button',
    tabIndex = 0,
    ...props
}: ButtonProps) => {
    const typeClassName = primary ? 'Primary' : ''
    const className = ['Button', typeClassName].join(' ')
    const iconBeforeEl = iconBefore && <FontAwesomeIcon icon={iconBefore} className="IconBefore" />
    const iconAfterEl = iconAfter && <FontAwesomeIcon icon={iconAfter} className="IconAfter" />
    const buttonProps = {
        ...props,
        className,
        role,
        tabIndex,
        // If the button has an on click handler, make sure it is accessible to
        // keyboard users via the key down event when they hit enter.
        onKeyDown: props?.onKeyDown || onEnter(props?.onClick),
    }
    return (
        <span {...buttonProps}>
            {iconBeforeEl}
            <span>{label}</span>
            {iconAfterEl}
        </span>
    )
}
