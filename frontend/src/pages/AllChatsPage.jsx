import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { useCurrentAuthUser } from '../app/login'
import {
    getUserData,
    useGetManyUserData,
    useGetAllUserMatches,
    useFetchBlockedUsers,
} from '../app/data'
import { ChatInbox } from '../app/inbox'
import { saveEvent } from '../app/utils'

const ChatInboxHeader = () => (
    <div className="Header Light">
        <h1 className="BigTitle">
            <Link to="/">
                <span>Butterfly Chats</span>
            </Link>
        </h1>
        <p>Each week, you will be matched to another person in your community.</p>
        <p>
            <span>Check back on Mondays to see who you are matched with! </span>
            <span>
                Update <Link to="/me">your profile</Link> for better matches.
            </span>
        </p>
    </div>
)

export default function AllChatsPage() {
    const authUser = useCurrentAuthUser()
    const matches = useGetAllUserMatches(authUser?.uid)
    const blockedUsers = useFetchBlockedUsers(authUser?.uid)
    const [isOpen, setIsOpen] = useState(false)

    const handleInboxOpening = () => {
        setIsOpen((prev) => !prev)
    }

    // map to check if blocked user from dictionary is present in inbox
    const matchesWithBlocks = matches.map((match) => ({
        ...match,
        hasBlockedUser: Object.keys(match.participants).some(
            (participant) => participant in blockedUsers
        ),
    }))
    // separate blocked and unblocked chats
    const unblockedMatches = matchesWithBlocks.filter((m) => !m.hasBlockedUser)
    const blockedMatches = matchesWithBlocks.filter((m) => m.hasBlockedUser)

    const matchedUserIds = matches.reduce(
        (agg, m) => ({
            ...agg,
            ...m.participants,
        }),
        {}
    )

    const matchedUsers = useGetManyUserData(matchedUserIds, getUserData)
    useEffect(() => {
        if (authUser?.uid) {
            saveEvent('view_chat_inbox', {
                user: authUser.uid,
            })
        }
    }, [authUser?.uid])

    const icon = isOpen ? (
        <FontAwesomeIcon icon={faChevronUp} />
    ) : (
        <FontAwesomeIcon icon={faChevronDown} />
    )

    return (
        <div className="AllChatsPage FullHeight LightBackground">
            <ChatInboxHeader />
            <ChatInbox chats={unblockedMatches} users={matchedUsers} />

            <div className={blockedMatches.length === 0 ? 'Hidden' : ''}>
                <div className="Header Light">
                    <div className="HiddenInboxHeader">
                        <h5>Hidden Conversations</h5>
                        <button
                            type="button"
                            className="HiddenInboxButton"
                            onClick={handleInboxOpening}
                        >
                            {icon}
                        </button>
                    </div>
                    <p>These chats are hidden because they include users that you have blocked.</p>
                </div>
                {isOpen && <ChatInbox chats={blockedMatches} users={matchedUsers} />}
            </div>
            <div className="Padded Centered">
                <p>
                    Want to <Link to="/games/vocable">play a game?</Link>
                </p>
            </div>
        </div>
    )
}
