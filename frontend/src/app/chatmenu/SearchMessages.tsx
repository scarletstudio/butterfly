/* global HTMLTextAreaElement */
import React, { useState } from 'react'
import './SearchMessages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { ChatMenuPageProps, MessagesData } from './ChatMenuPage'
import { Message } from '../chat/Message'
import { ChatData } from '../types'

interface SearchMessagesProps {
    chat?: ChatData
    messages?: MessagesData[]
}

// Extracts the messages in the chat to be filtered through
const MessagesInner = ({ chat, filteredMessages }) => {
    return filteredMessages?.map((message: { key: React.Key | null | undefined }) => (
        <Message
            key={message.key}
            data={message}
            myUserId={chat?.for}
            participants={chat?.participants}
        />
    ))
}

const SearchMessagesInner = ({ messages, chat }: SearchMessagesProps) => {
    const [value, setValue] = useState<string>()
    const [filteredMessages, setfilteredMessages] = useState<MessagesData[] | undefined>()

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value)
    }

    // Conducts the Search in the messages
    const doSearch = () => {
        setfilteredMessages(
            messages?.filter((text) => {
                const searchString: string = value ?? ''

                return (
                    text.message.toLowerCase().includes(searchString.toLowerCase()) && // Changes the message to lowercase
                    searchString !== '' && // Checks for whitespaces
                    searchString.trim()
                )
            })
        )
        setValue('')
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
        <div className="Search">
            <textarea
                className="Input"
                placeholder="Search Messages"
                value={value}
                onChange={handleChange}
                onKeyDown={searchOnCtrlEnter}
            />
            <button type="button" onClick={doSearch} className="ButtonSearch">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <div>
                <p>Showing Results ... from Total</p>
                <MessagesInner chat={chat} filteredMessages={filteredMessages} />
            </div>
        </div>
    )
}

const SearchMessages = ({ chat, messages }: ChatMenuPageProps) => (
    <SearchMessagesInner chat={chat} messages={messages} />
)

export default SearchMessages

// TODO:
// 1. Add a No results UI with 0 results
// 2. Add a result counter for example: Showing 4 results out of Total number
// 5. Add storybook examples
// 6. Add comments for better documentation
