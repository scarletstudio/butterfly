import React from 'react'
import { useParams } from 'react-router-dom'

import { ChatApp, ChatHeader, ChatConversation, ChatComposer } from '../app/chat'
import { BlockUser, SearchMessages, RateMatch, UpvoteUser } from '../app/chatmenu'

const MENU_CONFIG = {
    options: [
        { id: 'search', name: 'Search Messages', component: SearchMessages },
        { id: 'block', name: 'Block User', component: BlockUser },
        { id: 'rate', name: 'Rate Match', component: RateMatch },
        { id: 'upvote', name: 'Upvote User', component: UpvoteUser },
    ],
}

export default function ChatPage() {
    const { communityId, chatId } = useParams()
    const fullChatId = `${communityId}/${chatId}`
    return (
        <div className="ChatPage">
            <div className="ChatContainer">
                <ChatApp
                    chatId={fullChatId}
                    header={<ChatHeader menuConfig={MENU_CONFIG} />}
                    conversation={<ChatConversation />}
                    composer={<ChatComposer />}
                />
            </div>
        </div>
    )
}
