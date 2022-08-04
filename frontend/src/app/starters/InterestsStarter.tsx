import React from 'react'
import './InterestsStarter.css'
import { ConversationStarterProps } from './ConversationStarter'
import { pluralize } from '../utils/Utils'
import { CommunityData } from '../../config/communities'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InterestsStarterProps {
    chatInterests: Array<string>
    communityData: CommunityData
}

const InterestsStarterInner = ({ chatInterests, communityData }: InterestsStarterProps) => {
    const nInterest = pluralize(chatInterests.length, 'interest')
    const commonChatInterests = chatInterests.map((interest) => {
        return (communityData.interests || []).find((x) => {
            return x?.code === interest
        })?.name
    })
    const joinedInterest = commonChatInterests.join(', ')
    const anyInterest = `Fun fact, you have ${nInterest} in common, which ${
        commonChatInterests.length === 1 ? 'is' : 'are'
    } ${joinedInterest}!`
    const noInterest = 'Unfortunately, you do not share any interest in common!'
    const message = commonChatInterests.length > 0 ? anyInterest : noInterest
    return (
        <div className="Interests-Starter">
            <p>{message}</p>
        </div>
    )
}

const InterestsStarter = ({ chat, community }: ConversationStarterProps) => (
    <InterestsStarterInner
        chatInterests={chat?.metadata?.interests || []}
        communityData={community}
    />
)

export default InterestsStarter
