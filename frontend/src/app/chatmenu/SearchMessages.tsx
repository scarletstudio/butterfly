import React from 'react'
import './SearchMessages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { ChatMenuPageProps, MessagesData } from './ChatMenuPage'

interface SearchMessagesProps {
    // TODO: Fill out the props for your component
    messages: MessagesData[]
}
/*
const searchbar = document.getElementById("searchbar");
//const namesFromDOM = document.getElementsBy("useGetMessages");
searchbar.addEventListener("keyup", (event) => {
    const {value} = event.target;

    const searchQuery = value.toLowerCase();

    for(const nameElement of useGetMessages()) {
        let name = nameElement.textContent.toLowerCase();

        if(name.includes(searchQuery)) {
            nameElement.display = "block";
        }
        else {
            nameElement.display = "none";
        }
    }
});
*/

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const SearchMessagesInner = ({ messages }: SearchMessagesProps) => {
    return (
        <div className="Search">
            <div>
                {/* TODO: Use these messages to filter based on search string  */}
                {messages.map((text) => text.message)}
            </div>
            <form action="/" method="get">
                <div className="SearchBox">
                    <input type="search" placeholder="Search Messages" id="searchbar" />
                </div>
                <div className="ButtonSearch">
                    <button type="button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </form>
        </div>
    )
}

// TODO: Pass your component its props
// eslint-disable-next-line no-unused-vars
const SearchMessages = ({ chat, config, messages }: ChatMenuPageProps) => (
    <SearchMessagesInner messages={messages} />
)

export default SearchMessages
