import React from 'react'
import './InterestsStarter.css'
import { ConversationStarterProps } from './ConversationStarter'
import { pluralize } from '../utils'
import { CommunityData } from '../../config/communities'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InterestsStarterProps {
    chatInterests: Array<string>
    communityData: CommunityData
}

const InterestsStarterInner = ({ chatInterests, communityData }: InterestsStarterProps) => {
    const communityInterests = communityData.interests
    const communityStringInterests: Array<string> = []
    communityInterests.forEach((x) => {
        communityStringInterests.push(x.name)
    })
    const combinedInterests = chatInterests.concat(communityStringInterests)
    const nInterest = pluralize(combinedInterests.length, 'interest')
    const joinedInterest = combinedInterests.join(', ')
    const anyInterest = `Fun fact, your common interest ${nInterest} ${
        combinedInterests.length === 1 ? 'is' : 'are'
    }: ${joinedInterest}!`
    const noInterest = 'Fun fact, you do not share any interest in common!'
    const message = combinedInterests.length > 0 ? anyInterest : noInterest
    return (
        <div className="Interests-Starter">
            <p>{message}</p>
        </div>
    )
}

const InterestsStarter = ({ chat, community }: ConversationStarterProps) => (
    <InterestsStarterInner
        chatInterests={chat?.metadata?.interests || []}
        communityData={community || { interests: [] }}
    />
)

export default InterestsStarter
