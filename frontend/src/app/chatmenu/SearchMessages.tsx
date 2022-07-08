import React from 'react'
import './SearchMessages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { ChatMenuPageProps } from './ChatMenuPage'
// import { useGetMessages } from '../chat/ChatHooks'

interface SearchMessagesProps {
    // TODO: Fill out the props for your component
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
const SearchMessagesInner = ({}: SearchMessagesProps) => {
    return (
        <div className="Search">
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
const SearchMessages = ({ chat, config }: ChatMenuPageProps) => <SearchMessagesInner />

export default SearchMessages
