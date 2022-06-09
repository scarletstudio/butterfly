import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle, faBars } from '@fortawesome/free-solid-svg-icons'

import { ChatContext } from './ChatApp'

import { UserTile } from '../ui'
import { formatMatchDate } from '../utils'

function BackToChatsButton() {
    return (
        <div className="FloatingButton BackToChatsButton">
            <Link to="/chats" className="NoDecorate">
                <FontAwesomeIcon icon={faXmarkCircle} className="IconBefore" />
                <span className="FloatingButtonTooltip">Back to Chats</span>
            </Link>
        </div>
    )
}

function ChatAppMenuButton({ label, onClick }) {
    return (
        <div
            className="FloatingButton ChatAppMenuButton"
            tabIndex={0}
            role="button"
            onClick={onClick}
            onKeyDown={onClick}
        >
            <span className="FloatingButtonTooltip">{label}</span>
            <FontAwesomeIcon icon={faBars} className="IconBefore" />
        </div>
    )
}

function ChatHeaderInner({ chat, onMenuClick }) {
    const userEls = Object.values(chat?.participants || {}).map((user) => (
        <UserTile key={user.uid} user={user} />
    ))
    const matchDate = formatMatchDate(chat?.release_timestamp)
    return (
        <>
            <BackToChatsButton />
            <ChatAppMenuButton label="Open Menu" onClick={onMenuClick} />
            <h1>Butterfly Chat</h1>
            <p>Messages will disappear after 30 days.</p>
            <p>Your match for the week of {matchDate}.</p>
            <div className="UserRowCentered">{userEls}</div>
        </>
    )
}

export function ChatMenuInner({ menuConfig, onMenuClick, setOption }) {
    return (
        <>
            <ChatAppMenuButton label="Close Menu" onClick={onMenuClick} />
            <div className="ChatMenu">
                <h2>Chat Menu</h2>
                {menuConfig?.options?.map((opt) => (
                    <div
                        className="MenuOption"
                        key={opt.id}
                        tabIndex={0}
                        role="button"
                        onClick={() => setOption(opt.id)}
                        onKeyDown={() => setOption(opt.id)}
                    >
                        <span>{opt.name}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export function SubMenuContainer({ name, onClick, children }) {
    return (
        <>
            <ChatAppMenuButton label="Chat Menu" onClick={onClick} />
            <div className="ChatMenu">
                <h2>{name}</h2>
                {children}
            </div>
        </>
    )
}

function ComingSoon() {
    return <p>Coming soon...</p>
}

export function ChatMenu({ menuConfig, onMenuClick }) {
    const subMenuMap = menuConfig?.options?.reduce(
        (agg, opt) => ({
            ...agg,
            [opt.id]: opt,
        }),
        {}
    )
    const [showOption, setShowOption] = useState(null)
    const closeOption = () => setShowOption(null)
    const selectedOption = subMenuMap?.[showOption]
    if (selectedOption) {
        const SubMenuComponent = selectedOption?.component || ComingSoon
        return (
            <SubMenuContainer name={selectedOption?.name} onClick={closeOption}>
                <SubMenuComponent />
            </SubMenuContainer>
        )
    }
    return (
        <ChatMenuInner
            menuConfig={menuConfig}
            onMenuClick={onMenuClick}
            setOption={setShowOption}
        />
    )
}

const MENU_CONFIG = {
    options: [
        { id: 'search', name: 'Search Messages' },
        { id: 'block', name: 'Block Users' },
        { id: 'rate', name: 'Rate Match' },
    ],
}

export function ChatHeader() {
    const [showMenu, setShowMenu] = useState(false)
    const openMenu = () => setShowMenu(true)
    const closeMenu = () => setShowMenu(false)
    const { chat } = useContext(ChatContext)
    if (showMenu) {
        return <ChatMenu menuConfig={MENU_CONFIG} onMenuClick={closeMenu} />
    }
    return <ChatHeaderInner chat={chat} onMenuClick={openMenu} />
}
