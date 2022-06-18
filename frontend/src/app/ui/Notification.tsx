import React, { useEffect, useState } from 'react'
import { onEnter } from '../utils'

import './Notification.css'

interface NotificationProps {
    visible: boolean
    classes: Array<string>
    children: React.FC
}

export function Notification({ visible, classes = [], children }: NotificationProps) {
    // By default, notification is hidden until set to visible.
    const [isVisible, setIsVisible] = useState(visible || false)
    const display = isVisible ? 'Block' : 'Hidden'

    useEffect(() => {
        setIsVisible(visible)
    }, [visible])

    return (
        <div className={`Notification ${classes.join(' ')} ${display}`}>
            <div className="CloseHolder">
                <span
                    className="Close"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                        setIsVisible(false)
                    }}
                    onKeyDown={onEnter(() => {
                        setIsVisible(false)
                    })}
                >
                    x
                </span>
            </div>
            {children}
        </div>
    )
}
