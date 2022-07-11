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

    const doSearch = () => {
        setfilteredMessages(
            messages?.filter((text) => {
                const searchString: string = value ?? ''

                return (
                    text.message.toLowerCase().includes(searchString.toLowerCase()) &&
                    searchString !== '' &&
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
        const hitEnter = e.keyCode === 13
        const holdingKey = e.ctrlKey || e.shiftKey
        if (hitEnter && !holdingKey) {
            e.preventDefault()
            doSearch()
        }
    }

    return (
        <div className="Search">
            <div>
                <MessagesInner chat={chat} filteredMessages={filteredMessages} />
            </div>
            <textarea
                className="Input"
                placeholder="Type here..."
                value={value}
                onChange={handleChange}
                onKeyDown={searchOnCtrlEnter}
            />
            <button type="button" onClick={doSearch} className="ButtonSearch">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
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
// 3. Fix the CSS for the Search Bar
// 4. Move the Search Bar to the top of the page
// 5. Add storybook examples
// 6. Add comments for better documentation
