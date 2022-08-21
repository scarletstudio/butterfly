/* global HTMLTextAreaElement */
import React, { useState } from 'react'
import './SearchMessages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ChatMenuPageProps, MessagesData } from './ChatMenuPage'
import { Message } from '../chat/Message'
import { ChatData } from '../types'

interface SearchMessagesProps {
    chat?: ChatData
    messages?: MessagesData[]
}

// Extracts the messages in the chat to be filtered through
const MessagesInner = ({ chat, filteredMessages, totalMessages }) => {
    let results

    if (filteredMessages?.length === 0) {
        results = `There were ${filteredMessages?.length} messages with that search. Please try again!`
    } else if (filteredMessages?.length >= 1) {
        results = `Showing ${filteredMessages?.length} message(s) from ${totalMessages?.length} messages`
    }

    return (
        <>
            <p>{results}</p>
            <div>
                {filteredMessages?.map((message: { key: React.Key | null | undefined }) => (
                    <Message
                        key={message.key}
                        data={message}
                        myUserId={chat?.for}
                        participants={chat?.participants}
                    />
                ))}
            </div>
        </>
    )
}

function cleanText(value: string) {
    return value?.toLowerCase().trim()
}
const SearchMessagesInner = ({ messages, chat }: SearchMessagesProps) => {
    const [value, setValue] = useState<string>('')
    const [filteredMessages, setfilteredMessages] = useState<MessagesData[] | undefined>()

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value)
    }

    // Conducts the Search in the messages
    const doSearch = () => {
        setfilteredMessages(
            messages?.filter((text) => {
                const searchString: string = cleanText(value)
                const messageText: string = cleanText(text.message)

                return searchString !== '' && messageText?.includes(searchString)
            })
        )
    }

    const searchOnCtrlEnter = (e: {
        keyCode: number
        ctrlKey: any
        shiftKey: any
        preventDefault: () => void
    }) => {
        const hitEnter = e.keyCode === 13 // Assigns hitEnter to the Enter key
        const holdingKey = e.ctrlKey || e.shiftKey
        if (hitEnter && !holdingKey) {
            // Search upon hitting the enter key
            e.preventDefault()
            doSearch()
        }
    }

    // Creates the Seach bar and Button
    return (
        <>
            <textarea
                className="Input"
                placeholder="Search Messages"
                value={value}
                onChange={handleChange}
                onKeyDown={searchOnCtrlEnter}
            />
            <FontAwesomeIcon
                onClick={() => setValue('')}
                icon={faXmark}
                className={value === '' ? 'Hidden' : 'text-icon'}
            />
            <button type="button" onClick={doSearch} className="ButtonSearch">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <div>
                <MessagesInner
                    chat={chat}
                    filteredMessages={filteredMessages}
                    totalMessages={messages}
                />
            </div>
        </>
    )
}

const SearchMessages = ({ chat, messages }: ChatMenuPageProps) => (
    <SearchMessagesInner chat={chat} messages={messages} />
)

export default SearchMessages
