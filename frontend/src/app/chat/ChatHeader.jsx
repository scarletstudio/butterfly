import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { ChatContext } from './ChatApp'
import { ChatAppMenuButton, ChatMenu } from './ChatMenu'

import { UserDisc } from '../ui'

const ICON_CHAT_BACK = faArrowLeft
const ICON_MENU_OPEN = faBars

function BackToChatsButton() {
    return (
        <div className="FloatingButton BackToChatsButton">
            <Link to="/chats" className="NoDecorate">
                <FontAwesomeIcon icon={ICON_CHAT_BACK} className="IconBefore" />
                <span className="FloatingButtonTooltip">Back to Chats</span>
            </Link>
        </div>
    )
}

function getOtherUsers(chat, myUserId) {
    return Object.values(chat?.participants || {}).filter((user) => user.uid !== myUserId)
}

export function getChatTitle(otherUsers) {
    const [a, b] = otherUsers
    const [aName, bName] = [a?.displayName, b?.displayName]
    if (aName && bName) return `${aName} and ${bName}`
    return aName || ''
}

function ChatHeaderInner({ chat, myUserId, onMenuClick }) {
    const otherUsers = getOtherUsers(chat, myUserId)
    const userEls = otherUsers.map((user) => <UserDisc key={user.uid} user={user} />)
    return (
        <>
            <BackToChatsButton />
            <ChatAppMenuButton label="Open Menu" icon={ICON_MENU_OPEN} onClick={onMenuClick} />
            <div className="UserRowCentered">{userEls}</div>
            <h1>{getChatTitle(otherUsers)}</h1>
        </>
    )
}

export function ChatHeader({ menuConfig }) {
    const [showMenu, setShowMenu] = useState(false)
    const openMenu = () => setShowMenu(true)
    const closeMenu = () => setShowMenu(false)
    const { chat, myUserId } = useContext(ChatContext)
    if (showMenu) {
        return <ChatMenu menuConfig={menuConfig} onMenuClick={closeMenu} />
    }
    return <ChatHeaderInner {...{ chat, myUserId }} onMenuClick={openMenu} />
}
