import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

import { ChatContext } from './ChatApp'

const ICON_MENU_CLOSE = faXmarkCircle
const ICON_MENU_BACK = faBars

export function ChatAppMenuButton({ label, icon, onClick }) {
    return (
        <div
            className="FloatingButton ChatAppMenuButton"
            tabIndex={0}
            role="button"
            onClick={onClick}
            onKeyDown={onClick}
        >
            <span className="FloatingButtonTooltip">{label}</span>
            <FontAwesomeIcon icon={icon} className="IconBefore" />
        </div>
    )
}

function ChatMenuInner({ menuConfig, onMenuClick, setOption }) {
    return (
        <>
            <ChatAppMenuButton label="Close Menu" icon={ICON_MENU_CLOSE} onClick={onMenuClick} />
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

function SubMenuContainer({ name, onClick, children }) {
    return (
        <>
            <ChatAppMenuButton label="Chat Menu" icon={ICON_MENU_BACK} onClick={onClick} />
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
    const { chat } = useContext(ChatContext)
    if (selectedOption) {
        const SubMenuComponent = selectedOption?.component || ComingSoon
        return (
            <SubMenuContainer name={selectedOption?.name} onClick={closeOption}>
                <SubMenuComponent chat={chat} config={selectedOption} />
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
