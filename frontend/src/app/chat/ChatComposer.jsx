import React, { createRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { ChatContext } from './ChatApp'

export function ChatComposer() {
    const textRef = createRef()
    const { sendChatMessage } = useContext(ChatContext)

    const doSend = () => {
        sendChatMessage(textRef.current.value)
        textRef.current.value = ''
    }

    return (
        <>
            <textarea ref={textRef} className="Input" />
            <button type="button" onClick={doSend} className="Button Send">
                <FontAwesomeIcon icon={faArrowRight} className="IconBefore" />
            </button>
        </>
    )
}
